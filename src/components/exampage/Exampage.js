import React from "react";
import "./exampage.css";
import Questions from "./Questions";

function Exampage() {
  return (
    <div>
        <div className="qno">Question 1</div>
      <div className="timeset">
        <div className="time">01:33:33</div>
        <img className="clocksymbol" src="assets/images/clocksymbol.png" />
      </div>
      <div className="questionbox">
          <div className="question">LLorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in id diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut placerat gravida. Dolor velit sed non in semper. Enim etiam sem nunc fermentum sollicitudin tellus. Sagittis cum nec justo leo semper ut sollicitudin. Gravida pellentesque dis.</div>
        <img className="questionpic" src="assets/images/questionpic.png" />
          
          </div>
          <div className="option1">
            
        <img className="selectoption1" src="assets/images/selected.png" />

<div className="option1txt">Lorem ipsum dolor</div>
          </div>
          <div className="option2">
             
        <img className="selectoption2" src="assets/images/notselected.png" />

<div className="option2txt">Lorem ipsum dolor</div>
          </div>
          <div className="option3">
             
        <img className="selectoption3" src="assets/images/notselected.png" />

<div className="option3txt">Lorem ipsum dolor</div>
          </div>
          <div className="option4">
              
        <img className="selectoption4" src="assets/images/notselected.png" />

<div className="option4txt">Lorem ipsum dolor</div>
          </div>
          <div className="exitbutton">
              <div className="exittext">Exit</div>
          </div>
          <div className="submitbutton">
              <div className="submittext">Submit</div>
          </div>
          <div className="page1">1</div>
          <div className="page2">2</div>
          <div className="page3">3</div>
          <Questions/>
          <img className="previouspage" src="assets/images/previouspage.png"/>
          <img className="nextpage" src="assets/images/nextpage.png"/>
          <div className="previousbutton">
              <div className="previoustext">Previous</div>
        <div className="previous"><img className="" src="assets/images/previous.png" /></div>
        

          </div>
          <div className="nextbutton">
              <div className="nexttext">Next</div><div className="next"><img className="" src="assets/images/next.png" /></div>
              
          </div>
    </div>
  );
}

export default Exampage;
