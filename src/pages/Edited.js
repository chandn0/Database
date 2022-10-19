import React from 'react';
import { useEffect, useState } from "react";
import "./MyBlogs";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Fetchrequests from '../components/Fetchrequests';
import { contractabi, contractlocation } from '../config/constants';
import { ethers } from "ethers";

const Edited = () => {
  const { account } = useMoralis();
  const [editedarticlesrequestid, seteditedarticlesrequestid] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // const { data, error, fetch, isFetching, isLoading } =
  //   useWeb3ExecuteFunction({
  //     abi: contractabi,
  //     contractAddress: contractlocation,
  //     functionName: "getrequestsofaddress",
  //     params: {
  //       ad: account,
  //     },
  //   });

  // async function fetchmyedits() {
  //   try {
  //     const contract = new ethers.Contract(contractlocation, contractabi, provider);
  //     let ledger = await contract.getrequestsofaddress(account);
  //     seteditedarticlesrequestid(ledger);
  //   } catch (err) {
  //     console.error(err);

  //   }
  // }


  // useEffect(() => {
  //   // fetch()
  //   fetchmyedits();
  // }, [account]);

  // useEffect(() => {
  //   // seteditedarticlesrequestid(data);
  //   let k;
  //   if (editedarticlesrequestid) {
  //     let co = [];
  //     for (let i = 0; i < editedarticlesrequestid.length; i++) {
  //       k = editedarticlesrequestid[i].toNumber();
  //       co.push(k);
  //     }
  //     console.log(co);
  //     localStorage.setItem('editedrequestid', JSON.stringify(co));
  //     localStorage.setItem("Inrequestedblogs", true);

  //   }
  // }, [editedarticlesrequestid]);

  return (
    <div style={{ marginTop: '10px' }}>
      {JSON.parse(localStorage.getItem('editedrequestid')) ? (
        JSON.parse(localStorage.getItem('editedrequestid')).map((number, i) => {
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

export default Edited;