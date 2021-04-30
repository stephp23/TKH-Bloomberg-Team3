import React, { useState } from 'react';
import InformationViewer from './InformationViewer';

function BusinessFinder(props) {
    return (
        <div className="flex-column">
            <div className="flex flex-1">
                <div className="flex-1 sidebar">
                    <p>Sidebar</p>
                </div>
                <div className="flex flex-4">
                    <InformationViewer></InformationViewer>
                </div>
            </div>
            <div className="flex footer"></div>
        </div>
        );
}

export default BusinessFinder;