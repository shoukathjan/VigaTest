import React from "react";
import "./onboard.css";
import { Link, NavLink } from "react-router-dom";

function Onboard2() {
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
          <Link to="/onboard3">
            <div className="btext1">Continue</div>
          </Link>
        </div>
        <div className="gridob2">
          <img className="vector2" src="assets/images/vector2.png" />

          <img
            className="imgdev"
            src="assets/images/undraw_Dev_focus_re_6iwt 1 1.png"
          />
        </div>

        <div className="htext2">
          Customise your assessment and proctoring needs
        </div>

        <div className="group8">
          <div>
            <img className="rectangle60" src="assets/images/Rectangle 5.png" />
          </div>
          <div>
            <img className="rectangle70" src="assets/images/Rectangle 2.png" />
          </div>
          <div>
            <img className="rectangle4" src="assets/images/Rectangle 5.png" />
          </div>
          <div>
            <img className="rectangle5" src="assets/images/Rectangle 5.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboard2;
