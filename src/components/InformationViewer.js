import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function InformationViewer(props) {
    console.log(props);
    const [apiKey, setApiKey] = useState('6uZ6pdqW450sBe8x01Tsb3LDI0rV6SwkOaAohtGs');
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    const [colData, setColDef] = useState(null);
    useEffect(() => {
        setRowData(props.rowData);
        setColDef(props.columns);
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
                    columnDefs={colData}
                    defaultColDef={defaultColDef()}
                    onGridReady={onGridReady}
                    rowData={rowData}>
                </AgGridReact>
            </div>
        </div>
    );
}

function defaultColDef() {
    return {
        width: 150,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
    }
}

export default InformationViewer;