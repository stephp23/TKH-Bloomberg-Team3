import './App.css';
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home';
import InformationViewer from '../src/components/InformationViewer';
// import Schools from '../src/components/Schools';
import CollegeFinder from './components/Locations/CollegeFinder';
import DegreeSearch from './components/Degrees/DegreeSearch';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="flex-column flex-1 pad-10"> 
       <Header />
       <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/location" exact component={CollegeFinder} />
         <Route path="/degree" exact component={DegreeSearch} />
         <Route path="/allinfo" exact component={InformationViewer} />
       </Switch>
       <Footer />  
       </div>
  );
}

export default App;
