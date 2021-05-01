import React from 'react';
import Degrees from './Degrees';


function DegreeSearch(props) {
  return (
      <div className="flex-column">
          <div className="flex flex-1">
              <div className="flex-1 sidebar">
              </div>
              <div className="flex flex-5">
                  <Degrees />
              </div>
          </div>
          <div className="flex footer"></div>
      </div>
  );
}

export default DegreeSearch
