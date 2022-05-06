import React from "react";
import "./myclasses.css";

function MyClasses() {
  return (
    <div className="containerhome">
      <div className="profile1">
        <div className="id1">18BIS1241</div>
        <div className="name1">Samuel Doe</div>
        <img className="profileid" src="assets/images/Ellipse 1.png" />
      </div>
      <img className="group18" src="assets/images/Group 18.svg" />
      <div className="headerr">My Classes</div>
      <div className="demotext">Take Demo Exam</div>
      <div className="txt5">
        You’re are yet to be added to a class, till then you can relax
      </div>
    </div>
  );
}

export default MyClasses;
