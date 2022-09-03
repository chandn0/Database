import { useEffect, useState } from "react";
import "./MyBlogs.css";
import { useNavigate } from "react-router-dom";
import { useMoralis, useWeb3ExecuteFunction, } from "react-moralis";
import FetchblogCard from "../components/fetchblog";
import { contractabi, contractlocation } from "../config/constants";
const MyBlogs = () => {
  const { account } = useMoralis();
  const navigate = useNavigate();
  const [obj, setobj] = useState();
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
      localStorage.setItem('myblogs_Id', JSON.stringify(co));
      localStorage.setItem("Inblog", true);
    }

  }, [data]);

  function clickHandler() {
    navigate("/newStory");
  }

  return (
    <>
      <div>
        {JSON.parse(localStorage.getItem('myblogs_Id')) ? (
          <div>
            {JSON.parse(localStorage.getItem('myblogs_Id')).map((number, i) =>
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
    </>
  );
};

export default MyBlogs;
