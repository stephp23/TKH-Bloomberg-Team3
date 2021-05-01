import React from 'react';
import Button from '@material-ui/core/Button';
import Schools from '../Locations/Schools';

function CollegeFinder(props) {
    return (
        <div className="flex-column">
            <div className="flex flex-1">
                <div className="flex-1 sidebar">
                </div>
                <div className="flex flex-5">
                    <Schools />
                </div>
            </div>
            <div className="flex footer"></div>
        </div>
    );
}

export default CollegeFinder;