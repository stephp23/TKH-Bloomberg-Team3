import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function InformationViewer(props) {
    const columns = getColumns();
    const [apiKey, setApiKey] = useState('4GXH1JZZMWLKlc9oP2eb2A8RrDADLndBMR2jGnY2');
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    const [columnDefs, setColumnDefs] = useState(columns);
    useEffect(async () => {
        const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`;
        fetch(url).then((resp) => resp.json()).then((data) => {
            console.log(data);
            setRowData(data.results);
        });
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
                    columnDefs={columnDefs}
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

function getColumns() {
    return [
        { headerName: "School", field:"school.name" },
        { headerName: "State", field:"school.state", width: 75 },
        { headerName: "Zip", field:"school.zip", width: 125 }
    ]
}

export default InformationViewer;