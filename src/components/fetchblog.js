import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import BlogCard from "./BlogCard";
import { contractabi, contractlocation } from '../config/constants';

const FetchblogCard = ({ articleId }) => {
  const { isInitialized, isAuthenticated, account } = useMoralis();

  const navigate = useNavigate();
  const [obj, setobj] = useState();
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction({
      abi: contractabi,
      contractAddress: contractlocation,
      functionName: "articleuri",
      params: {
        id: articleId,
      },
    });

  useEffect(() => {
    fetch();
  }, [account]);


  useEffect(() => {
    setobj(data);
    if (obj) {
      console.log(obj);
      localStorage.setItem("articleId", obj);
    }
  }, [data]);

  return (
    <>
      <div>
        {data ? (<div><BlogCard uri={data} key={articleId} articleId={articleId} /></div>) : (<div></div>)}
      </div>
    </>
  );
};

export default FetchblogCard;
