import React from 'react';
import Button from '@material-ui/core/Button';
import Home from '../Home/Home';



const HomeView = () => {
  return (
   
    <div className="flex-column">
        <div className="flex flex-1">
          <div className="flex-1 sidebar">
          </div>
          <div className="flex flex-5">
            <Home />
        </div>
      </div>
    </div>
  )
}

export default HomeView
