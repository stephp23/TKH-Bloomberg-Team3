import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function InformationViewer(props) {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    useEffect(async () => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json').then((resp) => resp.json()).then((data) => setRowData(data))
    }, []);
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="ag-theme-balham" style={{ height: '100%', boxSizing: 'border-box' }}>
                <AgGridReact
                    style={{ width: '100%', height: '100%;' }}
                    onGridReady={onGridReady}
                    rowData={rowData}>
                    <AgGridColumn headerName="Athlete" field="athlete" />
                    <AgGridColumn headerName="Sport" field="sport" />
                </AgGridReact>
            </div>
        </div>
    );
}

export default InformationViewer;