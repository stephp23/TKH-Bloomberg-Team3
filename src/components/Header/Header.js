import React from 'react';
import { Link } from "react-router-dom";
// import '../App.css';
import './Header.css';
// import logo from '...src/images/logo.png';

const Header = () => {
  return (
    <div>
      <div className={`nav`}>
        <div className="div-header">
          <div className="nav-logo">
            {/* <img className="nav-logo" src={logo} alt="CollegeFinder" /> */}
          </div>
          <div className="div-link">
            <h4 className="router-header">
              <Link to="/"><li>Home</li></Link>
            </h4>
            <h4 className="router-header">
              <Link to="/location"><li>Location</li></Link>
            </h4>
            <h4 className="router-header">
              <Link to="/degree"><li>Search Degrees</li></Link>
            </h4>
            <h4 className="router-header">
              <Link to="/allinfo"><li>Information Viewer</li></Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
    
export default Header;