import React from "react";
import "./settings.css";

function Settings() {
  return (
    <div className="containerhome">
      <img className="backicon" src="assets/images/backicon.png" />
      <img className="profilimage" src="assets/images/Ellipse 1.png" />
      <div className="txtt">Samuel Doe</div>
      <div className="scode">18BIS1241</div>
      <div className="edittext">Edit Profile Picture</div>
      <div className="editiconn">
        <img className="editimage" src="assets/images/edit.png" />
      </div>
      <div className="gs1">General Settings</div>
      <div className="gsbox1">
        <div className="s1">Settings 1</div>
        <img className="darrow" src="assets/images/d arrow.png" />

        <img className="line1" src="assets/images/vector 17.png" />

        <div className="s2">Settings 2</div>
        <img className="rec10" src="assets/images/rec10.png" />
        <img className="ellipse10" src="assets/images/ellipse10.png" />
        <img className="line2" src="assets/images/vector 17.png" />

        <div className="s3">Settings 3</div>
        <img className="rectangle11" src="assets/images/Rectangle 11.png" />
        <img className="ellipse11" src="assets/images/ellipse11.png" />
      </div>
      <div className="gs2">General Settings</div>
      <div className="bs2">
        <div className="s21">Settings 1</div>
        <div className="vmore">View More</div>
        <img className="line3" src="assets/images/vector 17.png" />

        <div className="s22">Settings 2</div>
        <img className="rec10" src="assets/images/rec10.png" />
        <img className="ellipse10" src="assets/images/ellipse10.png" />

      </div>
    </div>
  );
}

export default Settings;
