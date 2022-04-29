import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";
import { url } from "../../config/api";

export const Login = () => {

const userRef = useRef();
const passwordRef = useRef();
 
const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
     const res = await axios.post(`${url}/auth/login`, {
       username : userRef.current.value,
       password : passwordRef.current.value,
     })
     dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Username"
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
