import React from 'react';
import Button from '@material-ui/core/Button';
import Footer from './components/Footer/Footer';
import Home from '../components/Home';
import Sidebar from './Sidebar';



const HomeView = () => {
  return (
   
    <div className="flex-column">
        <div className="flex flex-1">
          <div className="flex-1 sidebar">
          </div>
          <div className="flex flex-5">
            <Header />
            <Home />
        </div>
      </div>
    </div>
  )
  // return (
  //   <div>
  //     <h1>This is home</h1>
  //   </div>
  // )
}

export default HomeView
