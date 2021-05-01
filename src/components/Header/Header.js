import React, {
  Fragment
} from 'react';
import ReactDOM from "react-dom";
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Header.css';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from "../Home/Home";
import HomeView from "../Home/HomeView";
import Schools from "../Reports/Schools";
import DegreeSearch from "../Reports/DegreeSearch";
import FinancialsReport from "../Reports/Financials/FinancialsReport";


function Header() {
  // const allTabs = ['/', '/schools', '/degress', '/financials'];

  return (
    <div></div>
  )

}

export default Header;