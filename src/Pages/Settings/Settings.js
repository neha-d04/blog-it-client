import "./setting.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { url } from "../../config/api";


export const Settings = () => {
  const {user, dispatch}= useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "https://agile-eyrie-13317.herokuapp.com/images/";

  const handleSubmit = async (e)=>{
    dispatch({type:"UPDATE_START"});
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name",fileName);
      data.append("file",file);
      updatedUser.profilePic = fileName;
  
      try {
        await axios.post(`${url}/upload`,data);
        
      } catch (error) {
        
      }
    }
    try {
       const res = await axios.put(`${url}/users/${user._id}`, updatedUser);
       setSuccess(true);
       dispatch({type:"UPDATE_SUCCESS", payload:res.data});
    } catch (error) {
      dispatch({type:"UPDATE_FAILURE"});
    }
    
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete your Accout</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file): PF+user.profilePic} alt="" srcset="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcons fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
          <label htmlFor="">Email</label>
          <input type="text"  placeholder={user.email}  onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", paddingTop:"20px"}}>Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
