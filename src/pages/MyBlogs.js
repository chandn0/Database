import { useEffect, useState } from "react";
import "./MyBlogs.css";
import { useNavigate } from "react-router-dom";
import { useMoralis, useWeb3ExecuteFunction, } from "react-moralis";
import FetchblogCard from "../components/fetchblog";
import { contractabi, contractlocation } from "../config/constants";
import { ethers } from "ethers";

const MyBlogs = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const { account } = useMoralis();
  const navigate = useNavigate();
  // const [myarticles, setmyarticles] = useState();


  // useEffect(() => {
  //   let k;
  //   if (myarticles) {
  //     let co = [];
  //     for (let i = 0; i < myarticles.length; i++) {

  //       k = myarticles[i].toNumber();
  //       co.push(k);

  //     }
  //     localStorage.setItem('myblogs_Id', JSON.stringify(co));
  //   }
  // }, [myarticles]);

  // async function fetchmyarticles() {
  //   try {
  //     const contract = new ethers.Contract(contractlocation, contractabi, provider);
  //     let ledger = await contract.articleswriten(account);
  //     setmyarticles(ledger);
  //   } catch (err) {
  //     console.error(err);

  //   }
  // }
  // useEffect(() => {
  //   console.log("in blogs my blogs");
  //   fetchmyarticles();
  // }, []);

  function clickHandler() {
    navigate("/newStory");
  }

  return (
    <>
      <div>
        <div className="myBlogsHeader">My Blogs</div>
        {JSON.parse(localStorage.getItem('myblogs_Id')) ? (
          <div>
            {JSON.parse(localStorage.getItem('myblogs_Id')).map((number, i) =>
              <FetchblogCard key={i}
                articleId={number} />
            )}
          </div>) : (
          <div>
            <h3 >No Blogs</h3>
            <button onClick={clickHandler} className='createbutton'> Create First Blog</button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBlogs;
