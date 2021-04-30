import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css'; 
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function InformationViewer(props) {
    return (
        <div class="flex flex-1 info-viewer">
            <AgGridReact rowData={[]}></AgGridReact>
        </div>
        );
}

export default InformationViewer;