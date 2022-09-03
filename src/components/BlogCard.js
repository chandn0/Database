import "./BlogCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
const BlogCard = ({ uri, articleId }) => {
  const [check, setcheck] = useState(false);
  const [blogsContent, setBlogsContent] = useState();
  const { isInitialized, isAuthenticated, account } = useMoralis();

  useEffect(() => {
    fetchBlogurl();
  }, [account]);

  const fetchBlogurl = async () => {
    if (uri != undefined) {
      const res = await axios.get(uri);
      const externalUrl = res.data.externalUrl.toString();
      const re = await axios.get(externalUrl);
      const text = re.data.text.toString();
      const title = re.data.title;
      setBlogsContent({ title, text, articleId, externalUrl });
      setcheck(true);
    } else if (uri != null) {
      const res = await axios.get(uri);
      const externalUrl = res.data.externalUrl.toString();
      const re = await axios.get(externalUrl);
      const text = re.data.text.toString();
      const title = re.data.title;
      setBlogsContent({ title, text, articleId, externalUrl });
      setcheck(true);

    }
  }



  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/blog`, { state: { Id: blogsContent.articleId, btext: blogsContent.text, btitle: blogsContent.title } });
  };

  return (
    <div className="blog" onClick={clickHandler}>
      <div className="blog_leftSide">
        <div className="blogger">

        </div>
        {check ? (<div> <div className="blog_title">
          <h3>{blogsContent.title}</h3>
        </div>
          <div className="blog_content">
            <p>{blogsContent.text}...</p>
          </div>
        </div>) : (
          <div></div>
        )}

      </div>
      <div className="blog_rightSide">
        <div>
          <img
            className="blog_image"
            src="https://ipfs.moralis.io:2053/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
