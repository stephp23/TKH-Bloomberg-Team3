import React, { useState } from 'react';
import InformationViewer from './InformationViewer';

function BusinessFinder(props) {
    return (
        <div class="flex-column">
            <div class="flex flex-1">
                <div class="flex-1 sidebar">
                    <p>Sidebar</p>
                </div>
                <div class="flex flex-4">
                    <InformationViewer></InformationViewer>
                </div>
            </div>
            <div class="flex footer"></div>
        </div>
        );
}

export default BusinessFinder;