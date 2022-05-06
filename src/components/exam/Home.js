import React from "react";
import "./myclasses.css";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="containerhome">
      <Link to="/settings">
        <div className="profile1">
          <div className="id1">18BIS1241</div>
          <div className="name1">Samuel Doe</div>
          <img className="profileid" src="assets/images/Ellipse 1.png" />
        </div>
      </Link>

      <div className="headerr">My Classes</div>
      <div className="demotext">Take Demo Exam</div>
      <div className="box11">
        <div className="subjectcontainer">
          <div className="subsubject">CSE3013</div>
          <div className="subname">Neural Networks and Fuzzy Control</div>
        </div>
        <div className="downn">
          <img className="vectordown" src="assets/images/Vectordown.png" />
        </div>
      </div>
      <div className="box12">
        <div className="subjectcontainer2">
          <div className="up">
            <img className="" src="assets/images/upicon.png" />
          </div>
          <div className="subjectcontainer3">
            <div className="subsuject2">ECE1029</div>
            <div className="subname2">IOT System Architecture</div>
          </div>
        </div>
        <div className="box13">
          <div className="testname">CAT 1</div>
          <div className="datetime">
            <div className="fromdate">22nd Dec 2020 </div>
            <img className="ellipse2" src="assets/images/ellipse2.png" />
            <div className="timeperiod">9:00 am - 12:00 pm </div>
            <div className="notification1">
              <img className="" src="assets/images/bellmute.png" />
            </div>
          </div>

          <div className="completed">
            <div className="buttontext">Completed</div>
          </div>
        </div>
        <div className="box14">
          <div className="testname">CAT 2</div>
          <div className="datetime">
          <div className="fromdate">22nd Dec 2020 </div>
          <img className="ellipse2" src="assets/images/ellipse2.png" />
          <div className="timeperiod">9:00 am - 12:00 pm </div>
          <div className="notification1">
          <img className="" src="assets/images/bell.png" />

          </div>
          </div>
          
          {/* <Link to="/browsertest"> */}
          <Link to="/browsertest" className="joinexam">
            <div className="buttontext">Join Exam</div>
          </Link>
          {/* </Link> */}
        </div>
        <div className="box15">
          <div className="testname">Lab FAT</div>
          <div className="datetime">
          <div className="fromdate">22nd Dec 2020 </div>
          <img className="ellipse2" src="assets/images/ellipse2.png" />

          <div className="timeperiod">9:00 am - 12:00 pm </div>
          <div className="notification3">
          <img className="" src="assets/images/bell.png" />

          </div>
          </div>
          
          <div className="yettostart">
            <div className="buttontext">Yet to start</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
