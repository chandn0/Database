import { useState } from "react";
import "./NewStory.css"
import {
  useMoralisFile,
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { contractabi, contractlocation } from '../config/constants';
import Input from "./Input";
import { Remarkable } from "remarkable"
import { Link } from "react-router-dom";

const md = new Remarkable()

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
          <h2 style={{ textAlign: 'center' }}>Preview</h2>
          <a style={{ textAlign: 'center' }} href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer"><h6>Markdown  cheat sheet</h6></a>
          <div
            className="content"
            style={{ marginLeft: '10vh' }}
            dangerouslySetInnerHTML={{ __html: md.render(text) }}
          ></div>
        </form>

      </div>
    </>
  );
};

export default NewStory;
