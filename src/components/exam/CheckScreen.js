import React from "react";
import "./checkscreen.css";
import { Link } from "react-router-dom";

function CheckScreen() {
  return (
    <div className="checkscreen">
      <img className="videocss" src="assets/images/webvideo.png" />
      <img className="subpic" src="assets/images/White  Camera 1 3.png" />

      <div className="webvideo"></div>
      <div className="frame33">
        <div className="frame31">
          <div className="text1">Graduate Record Examination</div>
          <Link to="/home">
          <img className="rightarroww" src="assets/images/backicon.png" />
          </Link>
        </div>
        <div className="frame32">
          <div className="timee">9:00 am - 12:00 pm</div>
          <div className="datee">17th Dec 2020</div>
        </div>
        <div className="conditions">
          <div className="frame34">
            
            <img className="greentick1" src="assets/images/greentick.png" />
           
            <div className="checktext">Webcam check</div>
          </div>
          <div className="frame35">
            <img className="greentick2" src="assets/images/greentick.png" />
            <div className="checktext2">Mic testing</div>
          </div>
          <div className="frame36">
          <img className="wrongicon1" src="assets/images/wrongicon.png" />
<div className="checktext3">α Iris sync</div>
          </div>
          <div className="frame37">
          <img className="wrongicon2" src="assets/images/wrongicon.png" />
<div className="checktext4">BT / Alien hardware detection</div>
          
          </div>
          <div className="frame38">
          <img className="greentick3" src="assets/images/greentick.png" />
          <div className="checktext5">QR / Virtual Machine detection</div>

          </div>
          <div className="frame39">
          <img className="loading1" src="assets/images/loading.png" />
          <div className="checktext6">Browser lock</div>

          </div>
          <div className="frame40">
          <img className="loading2" src="assets/images/loading.png" />
          <div className="checktext7">Screen capture</div>

          </div>
          <div className="frame41">
          <img className="loading3" src="assets/images/loading.png" />
          <div className="checktext8">Identity authentication</div>

          </div>
        </div>
        <Link to="/exampage">
          <button className="startbutton">
            <div className="starttext">Start Exam</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckScreen;
