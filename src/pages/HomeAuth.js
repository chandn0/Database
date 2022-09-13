import { useState, useEffect } from "react";
import "./HomeAuth.css";
import { useMoralis, useWeb3ExecuteFunction, executeFunction } from "react-moralis";
import { contractabi, contractlocation } from "../config/constants";
import FetchblogCard from "../components/fetchblog";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";


const HomeAuth = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { account, } = useMoralis();
  const [obj, setobj] = useState();
  const navigate = useNavigate();

  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction({
      abi: contractabi,
      contractAddress: contractlocation,
      functionName: "articleswriten",
      params: {
        ad: account,
      },
    });
  const Mint = async (ID) => {
    const contract = new ethers.Contract(contractlocation, contractabi, provider);
    let k = await contract.articles(ID);
    return k;
  }
  useEffect(() => {
    Mint();
    // let fff = fetch();
    // console.log(fff);
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
      localStorage.setItem('blogs', JSON.stringify(co));
    }

  }, [data]);

  function clickHandler() {
    navigate("/newStory");
  }
  return (
    <div >
      <div className="homeAuth_header">Recommended Blogs</div>
      <div >
        {JSON.parse(localStorage.getItem('blogs')) &&
          JSON.parse(localStorage.getItem('blogs')).map((number, i) => {
            return (
              <FetchblogCard key={i}
                articleId={number} />
            );
          }
          )}
      </div>
    </div>
  );
};

export default HomeAuth;
