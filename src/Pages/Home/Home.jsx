import { useEffect, useState } from "react";
import "./home.css";
import { Header } from "../../components/Header/Header";
import { Posts } from "../../components/Posts/Posts";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
   //console.log(location);

  useEffect(()=>{
    const fetchPost = async ()=>{
    const res = await axios.get("/posts"+search);
    console.log(res);
    setPosts(res.data);
    }
    fetchPost();
  },[search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};
