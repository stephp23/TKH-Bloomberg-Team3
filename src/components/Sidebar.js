import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../App.css';


const Sidebar = () => {
  return (
    <div className="flex flex-1">
        <div className="flex-1 sidebar">
          <Button variant="contained" color="primary">
            <Link to="/"> <li>Home</li></Link>
          </Button>
          <Button>
            <Link to="/location"><li>Location</li></Link>
          </Button>
        </div>
      </div>
  
  )
}

export default Sidebar
