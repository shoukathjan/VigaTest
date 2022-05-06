import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import MinimizeIcon from '@mui/icons-material/Minimize';
import "../css/Style.css";
import "./sub/Signin.css"

function NavBar() {
  return (
  
      <div className="navbar">
        <div className="logotxt">Proctor Vision</div>

        <div className="actions">
          <img className="minimize" src="assets/images/minimize.png" />
          <img className="maximize" src="assets/images/maximize.png" />
          <img className="close" src="assets/images/close.png" />
        </div> 
        <div className="searchbar">
          
          <div className="searchsymbol">
          <img className="" src="assets/images/searchicon.png" />
          </div>
          <input type="text" className="textentry1" placeholder= "Search" />

        </div> 

        
      </div>
  
  );
}

export default NavBar;
