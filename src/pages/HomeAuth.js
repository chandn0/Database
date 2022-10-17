import { useState, useEffect } from "react";
import "./HomeAuth.css";
import { useMoralis, useWeb3ExecuteFunction, executeFunction } from "react-moralis";
import { contractabi, contractlocation } from "../config/constants";
import FetchblogCard from "../components/fetchblog";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import BlogCard from "../components/BlogCard";
import { useChain } from "react-moralis";

const HomeAuth = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { account, } = useMoralis();
  const [obj, setobj] = useState([]);
  const navigate = useNavigate();
  const [articallist, setArticallist] = useState();
  const { switchNetwork, chainId, chain } = useChain();
  const { isAuthenticated, isWeb3Enabled, isWeb3EnableLoading, enableWeb3 } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: connectorId });
    }
    if (chainId !== '0x5') {
      if (window.confirm("You're on the wrong network! Click OK to switch to rinkeby")) {
        switchNetwork('0x5');
      } else {
        alert("You're on the wrong network & will result in loss of funds due to failed transaction");
      }
    }
  }, [isAuthenticated]);



  useEffect(() => {
    let k;
    if (obj) {
      let co = [];
      for (let i = 0; i < obj.length; i++) {
        if (i % 2 != 0) {
          k = obj[i];
          co.push(k);
        }
      }
      localStorage.setItem('blogs', JSON.stringify(co));
    }
  }, [obj]);

  async function getl() {
    try {
      const contract = new ethers.Contract(contractlocation, contractabi, provider);
      let ledger = await contract.getarticles();
      setobj(ledger);
    } catch (err) {
      console.error(err);

    }
  }
  useEffect(() => {

    getl();
  }, []);

  function clickHandler() {
    navigate("/newStory");
  }
  return (
    <div >
      <div className="homeAuth_header">Recommended Blogs</div>
      <div >
        {JSON.parse(localStorage.getItem('blogs')) &&
          JSON.parse(localStorage.getItem('blogs')).map((uri, i) => {
            return (
              <BlogCard uri={uri} key={i} articleId={i} />
            );
          }
          )}
      </div>
    </div>
  );
};

export default HomeAuth;
