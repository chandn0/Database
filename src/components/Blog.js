import { useEffect, useState } from "react";
import "./Blog.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Url } from "../config/constants";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
const Blog = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  const { url } = useParams();

  const fetchBlogContent = async () => {
    const res = await axios.get(`${Url}/${url}`);
    setTitle(res.data.title);
    const text = res.data.text.toString();
    setText(text);
  };

  useEffect(() => {
    if (!title || !text) {
      fetchBlogContent();
    }
  }, [text, title,]);

  return (
    <div className="singleBlog">
      <div className="singleBlogWrapper">
        <div className="singleBlogContent">
          <Link to="/editblog" className="link">
            <div className="menuItems">
              <EditIcon title={title}
                text={text}

              />
            </div>
          </Link>
          <h1 className="singleBlogTitle">{title}</h1>
          <p className="singleBlogText">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
