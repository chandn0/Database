import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMoralisWeb3Api, useMoralis, useWeb3ExecuteFunction, useWeb3Contract, fetch } from "react-moralis";
import { contractabi, contractlocation } from '../config/constants';
import { parse } from 'path';
import axios from "axios";
import "./BlogCard.css";

const Fetchrequests = ({ requestId }) => {
    const [blogsContent, setBlogsContent] = useState();

    const { isInitialized, isAuthenticated, account } = useMoralis();
    const [obj, setobj] = useState();
    const [on, seton] = useState();

    const { data, error, fetch, isFetching, isLoading } =
        useWeb3ExecuteFunction({
            abi: contractabi,
            contractAddress: contractlocation,
            functionName: "requestdata",
            params: {
                requesetId: requestId,
            },
        });

    useEffect(() => {
        fetch();
    }, [account]);


    useEffect(() => {
        setobj(JSON.stringify(data));
        if (obj) {
            const record = data;
            let re = [];
            for (const o of record) {
                re.push(o);
            }
            seton(re);
            if (on) {
                fetchBlogurl(on[2]);
            }

        }
    }, [data]);

    const fetchBlogurl = async (uri) => {

        if (uri != undefined) {
            const res = await axios.get(uri);
            const externalUrl = res.data.externalUrl.toString();
            const re = await axios.get(externalUrl);
            const text = re.data.text.toString();
            const title = re.data.title;
            setBlogsContent({ title, text, externalUrl });
        } else if (uri != null) {
            const res = await axios.get(uri);
            const externalUrl = res.data.externalUrl.toString();
            const re = await axios.get(externalUrl);
            const text = re.data.text.toString();
            const title = re.data.title;
            setBlogsContent({ title, text, externalUrl });
        }
    }

    return (
        <div>
            {blogsContent ? (<div> <h2>{blogsContent.title}</h2>
                <p>{blogsContent.text}</p>
                <p>IPFS Content address :{blogsContent.externalUrl}</p>
                <p>ArticleId: {on[1].toNumber()}</p>
                <p>Total amount:{on[3]}</p>
                <br></br>
            </div>) : (<div></div>)}
        </div>
    );
};
export default Fetchrequests;