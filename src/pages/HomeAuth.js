import { useState, useEffect } from "react";
import "./HomeAuth.css";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { useMoralis, useWeb3ExecuteFunction, } from "react-moralis";
import { contractabi, contractlocation } from "../config/constants";
import FetchblogCard from "../components/fetchblog";
import { useNavigate } from "react-router-dom";

const HomeAuth = () => {
  const { account } = useMoralis();
  const [obj, setobj] = useState();
  const navigate = useNavigate();

  const [blogsContent, setBlogsContent] = useState();
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction({
      abi: contractabi,
      contractAddress: contractlocation,
      functionName: "articleswriten",
      params: {
        ad: account,
      },
    });

  useEffect(() => {
    fetch()
    console.log("in");
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
      console.log("in2");
      localStorage.setItem('blogs', JSON.stringify(co));
    }

  }, [data]);

  function clickHandler() {
    navigate("/newStory");
  }
  return (
    <div >
      <div className="homeAuth_header">Recommended Blogs</div>

      {JSON.parse(localStorage.getItem('blogs')) ? (
        <div>
          {JSON.parse(localStorage.getItem('blogs')).map((number, i) =>
            <FetchblogCard key={i}
              articleId={number} />
          )}
        </div>) : (
        <div>
          <h1>No Blogs</h1>
          <button onClick={clickHandler} > Create First Blog</button>
        </div>
      )}


    </div>
  );
};

export default HomeAuth;
