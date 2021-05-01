import React from 'react';
import Button from '@material-ui/core/Button';
import Home from '../components/Home';



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
}

export default HomeView
