import React from "react";
import logo from "../images/ironhack-logo.svg";
import menuTop from "../images/menu-top.svg";
import reactLogo from "../images/react-logo.svg";

class Application extends React.Component {
  render() {
    return (
      <div>
        <div className="background-images">
          <img src={reactLogo} alt="reactLogo" />
          <img src={reactLogo} alt="reactLogo" />
          <img src={reactLogo} alt="reactLogo" />
        </div>
        <div className="topbar">
          <img src={logo} alt="ironhackLogo" />
          <img src={menuTop} alt="menuTop" />
        </div>
        <div className="content">
          <div className="title-container">
            <h1>Say hello to ReactJs</h1>
          </div>
          <div className="subtitle-container">
            <h3>
              You will learn a frontend framework from scratch, to becaome an
              Ninka Developer (sic)
            </h3>
          </div>
          <button>Awesome!</button>
        </div>
      </div>
    );
  }
}

export default Application;
