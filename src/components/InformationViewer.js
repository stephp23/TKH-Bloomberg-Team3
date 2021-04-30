import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function InformationViewer(props) {
    const [apiKey, setApiKey] = useState('4GXH1JZZMWLKlc9oP2eb2A8RrDADLndBMR2jGnY2');
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
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
                    onGridReady={onGridReady}
                    rowData={rowData}
                    defaultColDef={{
                        width: 150,
                        filter: 'agTextColumnFilter',
                        floatingFilter: true,
                        resizable: true,
                      }}>
                    <AgGridColumn headerName="School" field="school.name" />
                    <AgGridColumn headerName="State" field="state" />
                </AgGridReact>
            </div>
        </div>
    );
}

export default InformationViewer;