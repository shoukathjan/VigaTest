import React from "react";
import "./Signin.css";
import { Link, NavLink } from 'react-router-dom';


function Signin() {
  return (
    <div className="signincontainer">
      <div className="box1">
        <div className="logo1">
          <div className="group1">
            <div className="group1_2">
              <div>
                <img className="imgproc" src="assets/images/Vector.png" />
        <img className="eyeicon1" src="assets/images/eye.png" />

              </div>
            </div>
          </div>
        </div>

        <div className="login">
          <div className="repass">
            Reset Password From Default/ Forgot Password
          </div>
          <div className="password">
            <div className="border1"></div>
            <div className="">
              <input className="textentry1" placeholder="Password" type="password" /> 
            </div>
          </div>
          <div className="username">
            <div className="border1"></div>
            <div className="">
              <input className="textentry1" placeholder="Username" type="text" /> 
            </div>
            
            {/* <div className="input1">
              <div className="cross1"></div>
              <div className="textentry1">Username</div>
            </div> */}
          </div>
          <Link to="/onboard1">

          <button className="button2">
              <div className="btext">Log In</div>

          </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Signin;
