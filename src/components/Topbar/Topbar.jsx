import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";

export const Topbar = () => {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";
const handleLogout = ()=>{
  dispatch({type:"LOGOUT"})
};

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <a href="https://www.facebook.com/" target="_blank"><i className=" topIcons fab fa-facebook-square"></i> </a> 
          <a href="https://twitter.com/i/flow/login" target="_blank"> <i className=" topIcons fab fa-twitter-square"></i> </a> 
          <a href="https://in.pinterest.com/" target="_blank"><i className=" topIcons fab fa-pinterest-square"></i></a>
          <a href="https://www.instagram.com/" target="_blank"> <i className=" topIcons fab fa-instagram-square"></i></a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
       
          {user ? (
           <Link to="/settings"> <img className="topImage" src={PF+user.profilePic} alt="" srcset="" /></Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className=" topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
};
