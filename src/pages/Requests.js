import React, { useLayoutEffect } from 'react';
import { useEffect, useState } from "react";
import "./MyBlogs";
import { useNavigate } from "react-router-dom";
import { useMoralisWeb3Api, useMoralis, useWeb3ExecuteFunction, useWeb3Contract, fetch } from "react-moralis";
import Fetchrequests from '../components/Fetchrequests';
import { contractabi, contractlocation } from '../config/constants';
const Requests = () => {
  const { isInitialized, isAuthenticated, account } = useMoralis();
  const navigate = useNavigate();
  const [local, setlocal] = useState();
  const [obj, setobj] = useState();
  const [o, seto] = useState();
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction({
      abi: contractabi,
      contractAddress: contractlocation,
      functionName: "articleedited",
      params: {
        ad: account,
      },
    });
  useEffect(() => {
    fetch()
  }, [account]);
  useEffect(() => {
    setobj(data);
    let k;
    if (obj) {
      let co = [];
      for (let i = 0; i < obj.length; i++) {
        k = obj[i].toNumber();
        co.push(k);
      }
      localStorage.setItem('requestedblogs', JSON.stringify(co));
      localStorage.setItem("Inrequestedblogs", true);
      seto(co);
      console.log(co);
    }
  }, [data]);
  return (
    <div>
      {JSON.parse(localStorage.getItem('requestedblogs')) ? (
        <div>
          {JSON.parse(localStorage.getItem('requestedblogs')).map((number, i) =>
            <Fetchrequests key={i}
              requestId={number} />
          )}
        </div>) : (
        <div>
          <h2 >Improve other's articles </h2>
        </div>
      )}
    </div>
  );
};

export default Requests;