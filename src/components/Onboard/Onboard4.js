import React from "react";
import "./onboard.css";
import { Link, NavLink } from 'react-router-dom';


function Onboard4() {
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
          <Link to="/home">
          <div className="btext2">Go to dashboard</div>
          </Link>
        </div>
        <img className="vector4" src="assets/images/vector4.png" />
        <div className="htext4">Protecting rights, respecting privacy</div>
        <div className="gridob4">
        <img
            className="imgsec"
            src="assets/images/undraw_Security_on_re_e491 1 1.png"
          />
        </div>
        <div className="group8">
            <div><img className='rectangle60' src="assets/images/Rectangle 2.png"/></div>
            <div><img className='rectangle90' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle100' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle101' src="assets/images/Rectangle 5.png"/></div>
        </div>
      </div>
    </div>
  );
}

export default Onboard4;
