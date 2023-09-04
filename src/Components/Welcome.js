import { React, useState, useEffect } from "react";
import Support from "./Support";
import ListCast from "./ListCast";
import Modals from "./Modals";
import Navbar from "./Navbar";
import "./Welcome.css";

function Welcome() {
  let [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json()); 
}

useEffect(() => {
    fetchCast();
});


  return (
    <>
    <Navbar cast={cast} onChoice={(info) => {setMemberInfo(info)}}/>
      <img src={require("../images/group.png")} alt="Star Gazers Group"></img>
      <h1>Meet the StarGazers</h1>
      <p>
        Members of an <b>intergalactic alliance</b> paving the way for peace and
        benevolence among all species. They are known for their enthusiasm for
        science, for their love of fun, and their dedication to education.
      </p>
      <Support />


      
      <div className="grid">
      <ListCast
        cast={cast} onChoice={(info) => {setMemberInfo(info)}}
      />
      {
      memberInfo&&
      <Modals member={memberInfo} handleClose={()=>{setMemberInfo(null)}}/>}
      </div>
      
      
    </>
  );
}

export default Welcome;
