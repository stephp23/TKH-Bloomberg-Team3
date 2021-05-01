import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Header.css';
// import logo from '...src/images/logo.png';

const Header = () => {
  return (
    <div className="flex flex">
      <Button variant="contained">Home</Button>
      <Button variant="contained">Schools</Button>
      <Button variant="contained">Degrees</Button>
    </div>
  )
}

export default Header;