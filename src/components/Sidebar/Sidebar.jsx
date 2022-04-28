import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import about from "./about2.jpg"

export const Sidebar = () => {
  const [cats, setCats]= useState([]);
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={about} alt="" srcset="" />
        <p>
        We make it easy for anyone in the world to launch and grow their online presence, through education, high-quality products, and reliable support.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
          
        ))}
          
          
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/" target="_blank"><i className=" topIcons fab fa-facebook-square"></i> </a> 
        <a href="https://twitter.com/i/flow/login" target="_blank"> <i className=" topIcons fab fa-twitter-square"></i> </a> 
        <a href="https://in.pinterest.com/" target="_blank"><i className=" topIcons fab fa-pinterest-square"></i></a>
        <a href="https://www.instagram.com/" target="_blank"> <i className=" topIcons fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
};
