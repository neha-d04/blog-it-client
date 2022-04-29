import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "../../config/api";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError]=useState("");

const handleSubmit = async (e)=>{
  e.preventDefault();
  setError(false);
  try {
    const res = await axios.post(`${url}/auth/register`,{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
  } catch (error) {
    setError(true);
  }
  
  // console.log(res);
}

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
          onChange={e=>setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
          onChange={e=>setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password"
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
};
