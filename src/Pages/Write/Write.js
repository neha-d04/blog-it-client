import { useContext, useState } from "react";
import "./write.css";
import axios from 'axios';
import { Context } from "../../context/Context";
import { url } from "../../config/api";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

const handleSubmit = async (e)=>{
  e.preventDefault();
  const newPost = {
    username: user.username,
    title,
    desc
  };
  if(file){
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name",fileName);
    data.append("file",file);
    newPost.photo = fileName;

    try {
      await axios.post(`${url}/upload`,data);
    } catch (error) {
      
    }
  }
  try {
    const res = await axios.post(`${url}/posts`, newPost);
    window.location.replace("/post/"+res.data._id);
  } catch (error) {
    
  }
  
}

  return (
    <div className="write">
    {file && (<img className="writeForm" src={URL.createObjectURL(file)} alt="" srcset="" />) }
      
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="inputFile">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="inputFile" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])}></input>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          ></input>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=> setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
};
