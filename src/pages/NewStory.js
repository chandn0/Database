import { useState } from "react";
import "./NewStory.css"
import {
  useMoralisFile,
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { contractabi, contractlocation } from '../config/constants';


const NewStory = () => {


  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { saveFile } = useMoralisFile();
  const { Moralis, account } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const mint = async (uri) => {
    let options = {
      functionName: "createarticle",
      abi: contractabi,
      contractAddress: contractlocation,
      params: {
        uri: uri,
      },
      msgValue: Moralis.Units.ETH(0),
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert("Succesful Mint");
        setText("");
        setTitle("");
      },
      onError: (error) => {
        alert(error.message);
      },
    });

  }


  const uploadFile = async (event) => {
    event.preventDefault();
    const textArray = text.split();
    const metadata = {
      title,
      text: textArray,
    };

    try {
      const result = await saveFile(
        "myblog.json",
        { base64: btoa(JSON.stringify(metadata)) },
        {
          type: "base64",
          saveIPFS: true,
        }
      );
      const nftResult = await uploadNftMetada(result.ipfs());
      await mint(nftResult.ipfs());
    } catch (error) {
      alert(error.message);
    }

  }
  const uploadNftMetada = async (url) => {
    const metadataNft = {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png",
      description: title,
      externalUrl: url,
    };
    const resultNft = await saveFile(
      "metadata.json",
      { base64: btoa(JSON.stringify(metadataNft)) },
      {
        type: "base64",
        saveIPFS: true,
      }
    );
    return resultNft;
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              autoFocus={true}
              value={text}
              onChange={(e) => setText(e.target.value)}
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

export default NewStory;
