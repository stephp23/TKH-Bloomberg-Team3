import React, { useState } from 'react';
import InformationViewer from './InformationViewer';
import Button from '@material-ui/core/Button';

function BusinessFinder(props) {
    return (
        <div className="flex-column">
            <div className="flex flex-1">
                <div className="flex-1 sidebar">
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </div>
                <div className="flex flex-5">
                    <InformationViewer></InformationViewer>
                </div>
            </div>
            <div className="flex footer"></div>
        </div>
    );
}

export default BusinessFinder;