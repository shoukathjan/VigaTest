import React from "react";
import "./onboard.css";
import { Link, NavLink } from 'react-router-dom';

function Onboard1() {
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
          <Link to="/onboard2">
          <div className="btext1">Continue</div>
          </Link>
        </div>
        <img className="vector1" src="assets/images/vector1.png" />
        <img className="imgteam" src="assets/images/undraw_Team_goals_re_4a3t 1 1.png" />
        <div className="htext">    We ensure that honesty pays</div>
        <div className="group8">
            <div><img className='rectangle2' src="assets/images/Rectangle 2.png"/></div>
            <div><img className='rectangle3' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle4' src="assets/images/Rectangle 5.png"/></div>
            <div><img className='rectangle5' src="assets/images/Rectangle 5.png"/></div>
        </div>
      </div>
    </div>
  );
}

export default Onboard1;
