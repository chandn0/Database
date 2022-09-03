import { Routes, Route } from "react-router-dom";
import NewStory from "./pages/NewStory";
import MyBlogs from "./pages/MyBlogs";
import Blog from "./components/Blog";
import Sidebar from "./components/Sidebar";
import HomeAuth from "./pages/HomeAuth";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { ConnectButton } from "web3uikit";
import logo from "./images/medium.png";
import { useMoralis } from "react-moralis";
import EditBlog from "./components/EditBlog";
import Requests from "./pages/Requests";
import Requested from "./pages/Requested";
const App = () => {
  const { isAuthenticated } = useMoralis();

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
              <Route path="/requested" element={<Requested />} />
            </Routes>
          </div>
          <div className="rightBar">
            <Rightbar />
          </div>
        </div>
      ) : (
        <div className="unAuth">
          <img src={logo} alt="logo" height="200px" />
          <ConnectButton />
        </div>

      )}
    </>
  );
};

export default App;
