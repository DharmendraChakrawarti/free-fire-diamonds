import React from "react";
import './Home.css';
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Fb from "./Fb";
const Home =()=>{
    const navigate=useNavigate();
return(
    <>
    <div className="d">
<div className="login-container">
  <button onClick={()=>navigate("/Fb")} className="login-button" id="goToDCPage">
    {/* <Link to="/Fb">Claim Reward</Link> */}
    Claim Reward
  </button>
</div>
</div>
</>
);
};

export default Home;