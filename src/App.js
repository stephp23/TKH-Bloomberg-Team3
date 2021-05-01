import './App.css';
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Schools from '../src/components/Reports/Schools';
import DegreeSearch from './components/Reports/Degrees/DegreeSearch';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="flex-column flex-1">
      <div className="header-div">
        <Header />
      </div>
      <div className="flex-column flex-1 pad-10">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schools" exact component={Schools} />
          <Route path="/degree" exact component={DegreeSearch} />
        </Switch>
      </div>
      <div className="flex footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default App;
