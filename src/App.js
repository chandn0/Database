import { Routes, Route } from "react-router-dom";
import NewStory from "./pages/NewStory";
import MyBlogs from "./pages/MyBlogs";
import Blog from "./components/Blog";
import Sidebar from "./components/Sidebar";
import HomeAuth from "./pages/HomeAuth";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { ConnectButton } from "web3uikit";
import logo from "./images/logo.jpeg";
import { useMoralis, useChain } from "react-moralis";
import EditBlog from "./components/EditBlog";
import Requests from "./pages/Requests";
import Edited from "./pages/Edited";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { contractabi, contractlocation } from "./config/constants";

const App = () => {
  const { isAuthenticated, isWeb3Enabled, isWeb3EnableLoading, enableWeb3, account } = useMoralis();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [articles, setarticles] = useState([]);
  const [myarticles, setmyarticles] = useState();
  const [editedarticlesrequestid, seteditedarticlesrequestid] = useState();


  async function fetcharticles() {
    try {
      const contract = new ethers.Contract(contractlocation, contractabi, provider);
      let ledger = await contract.getarticles();
      setarticles(ledger);
    } catch (err) {
      console.error(err);

    }
  }

  async function fetchmyarticles() {
    try {
      const contract = new ethers.Contract(contractlocation, contractabi, provider);
      let ledger = await contract.articleswriten(account);
      setmyarticles(ledger);
    } catch (err) {
      console.error(err);

    }
  }

  async function fetchmyedits() {
    try {
      const contract = new ethers.Contract(contractlocation, contractabi, provider);
      let ledger = await contract.getrequestsofaddress(account);
      seteditedarticlesrequestid(ledger);
    } catch (err) {
      console.error(err);

    }
  }


  useEffect(() => {
    let k;
    if (articles) {
      let co = [];
      for (let i = 0; i < articles.length; i++) {
        if (i !== 0) {
          k = articles[i];
          co.push(k);
        }
      }
      console.log(co);
      localStorage.setItem('blogs', JSON.stringify(co));
    }
  }, [articles]);


  useEffect(() => {
    console.log('empty');
    fetcharticles();
  }, [account]);

  useEffect(() => {
    // fetch()
    fetchmyedits();
  }, [account]);

  useEffect(() => {
    let k;
    if (editedarticlesrequestid) {
      let co = [];
      for (let i = 0; i < editedarticlesrequestid.length; i++) {
        k = editedarticlesrequestid[i].toNumber();
        co.push(k);
      }
      console.log(co);
      localStorage.setItem('editedrequestid', JSON.stringify(co));
      localStorage.setItem("Inrequestedblogs", true);

    }
  }, [editedarticlesrequestid]);


  useEffect(() => {
    let k;
    if (myarticles) {
      let co = [];
      for (let i = 0; i < myarticles.length; i++) {

        k = myarticles[i].toNumber();
        co.push(k);

      }
      localStorage.setItem('myblogs_Id', JSON.stringify(co));
    }
  }, [myarticles]);


  useEffect(() => {
    console.log("in blogs my blogs");
    fetchmyarticles();
  }, []);


  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<HomeAuth />} />
              <Route path="/newStory" element={<NewStory />} />
              <Route path="/editblog" element={<EditBlog />} />
              <Route path="/myBlogs" element={<MyBlogs />} />
              <Route path="/blog/" element={<Blog />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/edited" element={<Edited />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <div className="rightBar">
            <Rightbar />
          </div>
        </div>
      ) : (
        <div className="unAuth">
          <img src={logo} alt="logo" height="100px" style={{ borderRadius: '8px' }} />
          <h2>pencil</h2>
          <ConnectButton />
        </div>

      )}
    </>
  );
};

export default App;
