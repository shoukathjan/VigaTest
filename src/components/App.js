import React from "react";
import NavBar from "./NavBar";
import Onboard1 from "./Onboard/Onboard1";
import OnBoard from "./sub/OnBoard";
import Signin from "./sub/Signin";
import Onboard2 from "./Onboard/Onboard2";
import Onboard3 from "./Onboard/Onboard3";
import Onboard4 from "./Onboard/Onboard4";
import MyClasses from "./exam/MyClasses";
import Home from "./exam/Home";
import Settings from "./settings/Settings";
import CheckScreen from "./exam/CheckScreen";
import Exampage from "./exampage/Exampage";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    
      <BrowserRouter>
        <Switch>
        <div className="vigacontainer">
         <NavBar />
          <Route path="/" exact component={OnBoard} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/onboard1" exact component={Onboard1} />
          <Route path="/onboard2" exact component={Onboard2} />
          <Route path="/onboard3" exact component={Onboard3} />
          <Route path="/onboard4" exact component={Onboard4} />
          <Route path="/home" exact component={Home} />
          <Route path="/browsertest" exact component={CheckScreen} />
          <Route path="/exampage" exact component={Exampage} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/myclasses" exact component={MyClasses} />
          
           {/* <CheckScreen/> */}
      {/* <MyClasses/> */}
      
      {/* <Settings/> */}
          </div>
        </Switch>
      </BrowserRouter>
      

     
      

      
     
      
    
  );
};

export default App;
