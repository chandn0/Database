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
                console.log(on);
                fetchBlogurl(on[2]);
            }

        }
    }, [data]);

    const fetchBlogurl = async (uri) => {
        console.log("a");
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
                <h3>{blogsContent.text}</h3>
                <h3>{blogsContent.externalUrl}</h3>
                <h3>ArticleId:{on[1].toNumber()}</h3>
                <h3>Address voted:{on[3]}</h3>
                <h3>Total amount:{on[4]}</h3>
                <br></br>
            </div>) : (<div></div>)}
        </div>
    );
};
export default Fetchrequests;