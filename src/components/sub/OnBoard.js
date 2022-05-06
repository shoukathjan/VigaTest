import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Signin.css";


function OnBoard() {
  return (
    <div className="onboardcontainer">
      <div className="box">
        <div className="grid">
          <img className="imgproc" src="assets/images/Vector.png" />
        <img className="eyeicon" src="assets/images/eye.png" />
          <span className="gridtext">Proctor Vision</span>
        </div>
        <div className="boxtext">
          Welcome aboard to the future in the making you’ve just become a part
          of it
        </div>
      </div>
      <Link to="/signin">
        <button className="button button1"> Continue ></button>
      </Link>
    </div>
  );
}

export default OnBoard;
