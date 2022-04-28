import { Post } from "../Post/Post";
import "./posts.css";

export const Posts = ({posts}) => {
  return (
    <div className="posts">
    {(posts && posts.length) ? (posts.map((p)=>(
      <Post post={p}/>
    ))):null }
      
      
    </div>
  );
};
