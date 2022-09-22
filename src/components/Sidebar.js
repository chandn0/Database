import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import Logout from "@mui/icons-material/Logout";
import RateReviewIcon from "@mui/icons-material/RateReview";
import logo from "../images/logo.jpeg";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import EditRoadIcon from '@mui/icons-material/EditRoad';

const Sidebar = () => {
  const { logout } = useMoralis();

  const logOut = async () => {
    await logout();
  };

  return (
    <>
      <div className="siderContent">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="menu">
          <Link to="/" className="link" >
            <div className="menuItems">
              Home
            </div>
          </Link>
          <Link to="/myBlogs" className="link">
            <div className="menuItems">
              MyBlogs
            </div>
          </Link>
          <Link to="/newStory" className="link">
            <div className="menuItems">
              New
            </div>
          </Link>
          <Link to="/edited" className="link">
            <div className="menuItems">
              Edited
            </div>
          </Link>
          <Link to="/requests" className="link">
            <div className="menuItems">
              Requests
            </div>
          </Link>
          <Link to="/profile" className="link">
            <div className="menuItems">
              Profile
            </div>
          </Link>

        </div>
        <div className="logout" onClick={logOut}>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
