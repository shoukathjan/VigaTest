import React from "react";
import "./onboard.css";
import { Link, NavLink } from 'react-router-dom';


function Onboard3() {
  return (
    <div className="container">
     <Link to="/home">
      <div className="skip">Skip</div>
      </Link>
      <div className="box3">
        <div className="button3">
          <span className="right">
            <img className="vector19" src="assets/images/Vector 19.png" />
          </span>
          <Link to="/onboard4">
          <div className="btext1">Continue</div>
          </Link>
        </div>
        <img className="vector3" src="assets/images/vector3.png" />
        <div className="gridob3">
        <img
            className="imgseg"
            src="assets/images/undraw_Segment_analysis_re_ocsl 1 1.png"
          />
        </div>
        <div className="htext3">Say no to false reports</div>
        <div className="group8">
            <div><img className='rectangle60' src="assets/images/Rectangle 2.png"/></div>
            <div><img className='rectangle90' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle80' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle5' src="assets/images/Rectangle 5.png"/></div>
        </div>
      </div>
    </div>
  );
}

export default Onboard3;
