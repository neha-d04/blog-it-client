import "./post.css";
import {Link} from "react-router-dom";

export const Post = ({post}) => {

const PF = "http://localhost:5000/images/"

  return (
    <div className="post">
    {post.photo && (<img className="postImg" src={PF + post.photo} alt=""  />)}
      
      <div className="postInfo">
        <div className="postCats">
        {post.categories.map((c) =>( <span className="postCat">c.name</span>))}
         
          
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <div className="postTitle">{post.title}</div>
        </Link>
        
        <hr />
        <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
};
