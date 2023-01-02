import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [mode, setMode] = useState("light");
  // const [toggleModeText, settoggleModeText] = useState("Enable Dark Mode");
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black'
  // });

  // const toggleMode=()=>{
    // if(mode=='light'){
    //   setMode('dark')
    //   settoggleModeText('Disable Dark mode')
    //   setMyStyle({
    //     color: 'white'
    //   })
    // }
    // if(mode=='dark'){
    //   setMode('light')
    //   settoggleModeText('Enable Dark mode')
    //   setMyStyle({
    //     color: 'black'
    //   })
    // }
  // }

  return (
    <div>
      {/* start */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  {props.firstitem}
                </a>
              </li>
              {/* <li>
              <a className="nav-link " aria-current="page" href="/about">
                  {props.seconditem}
                </a>
              </li> */}
            </ul>
          </div>
         
          <div className="form-check form-switch">
            <input onClick={()=>{
              props.toggleMode();
              props.generatealert("Dark mode is enabled");
            }} 
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.myStyle}>
              {props.toggleModeText}
            </label>
          </div>
        </div>
      </nav>
      {/* end */}
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  firstitem: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter Title",
  firstitem: "Enter First Item",
};
