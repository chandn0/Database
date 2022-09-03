import { useState } from "react";
import "./NewStory.css"
import {
    useMoralisFile,
    useMoralis,
    useWeb3ExecuteFunction,
} from "react-moralis";


const EditBlog = () => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { saveFile } = useMoralisFile();
    const { Moralis, account } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();



};
export default EditBlog;