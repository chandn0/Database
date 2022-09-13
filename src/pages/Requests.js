import React from 'react';
import { useEffect, useState } from "react";
import "./MyBlogs";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Fetchrequests from '../components/Fetchrequests';
import { contractabi, contractlocation } from '../config/constants';

const Requests = () => {
  const { account } = useMoralis();
  const [obj, setobj] = useState();
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

    }
  }, [data]);
  return (
    <div style={{ marginTop: '10px' }}>
      {JSON.parse(localStorage.getItem('requestedblogs')) ? (
        JSON.parse(localStorage.getItem('requestedblogs')).map((number, i) => {
          return (<Fetchrequests key={i}
            requestId={number} />)
        }
        )
      ) : (
        <div>
          <h2 style={{ textAlign: 'center' }}>Improve other's articles </h2>
        </div>
      )}
    </div>
  );
};

export default Requests;