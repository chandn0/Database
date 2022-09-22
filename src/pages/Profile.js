import { Input } from "web3uikit";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction, executeFunction, useMoralisFile } from "react-moralis";
import { contractabi, contractlocation } from "../config/constants";
import "./NewStory.css"

const Profile = () => {
    const { account, } = useMoralis();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const { saveFile } = useMoralisFile();

    const update = async (uri) => {
        const signer = provider.getSigner(account);
        const contract = new ethers.Contract(contractlocation, contractabi, signer);
        let k = await contract.update(uri);
        console.log(k)
    }

    const uploadFile = async (event) => {
        event.preventDefault();
        const metadata = {
            "name": name,
            "bio": bio,
        };

        try {
            const result = await saveFile(
                "profile.json",
                { base64: btoa(JSON.stringify(metadata)) },
                {
                    type: "base64",
                    saveIPFS: true,
                }
            );
            await update(result.ipfs());
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <>
            <div>
                <form onSubmit={uploadFile} className="writeForm">
                    <div className="writeFormGroup">

                        <input
                            className="writeInput"
                            placeholder="Title"
                            type="text"
                            autoFocus={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />


                    </div>
                    <div className="writeFormGroup" >
                        <input
                            className="writeInput"
                            placeholder="bio"
                            autoFocus={true}
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <button className="writeSubmit" type="submit">
                        Publish
                    </button>
                </form>
            </div>
        </>
    );

};
export default Profile;