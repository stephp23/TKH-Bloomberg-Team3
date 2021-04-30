import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function InformationViewer(props) {
    const [apiKey, setApiKey] = useState('6uZ6pdqW450sBe8x01Tsb3LDI0rV6SwkOaAohtGs');
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    let pageCtr = 0;
    let collegeData = [];
    let hasResults = true;
    useEffect(async () => {
        await getAllData();
        setRowData(collegeData);
    }, []);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    const getAllData = async () => {
        while(hasResults){
            if(pageCtr === 0){
                const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`;
                await fetch(url).then((resp) => resp.json()).then((data) => {
                    console.log(data);
                    collegeData = collegeData.concat(data.results);
                    console.log(collegeData);
                    pageCtr++;
                });
            } else {
                const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&page=${pageCtr}&per_page=100`;
                await fetch(url).then((resp) => resp.json()).then((data) => {
                    if(data.results.length === 0 || data.results === undefined) {
                        hasResults = false;
                    } else {
                        console.log(data);
                        collegeData = collegeData.concat(data.results);
                        console.log(collegeData);
                        pageCtr++;
                    }
                });
            }
        }
    }
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
                    <AgGridColumn headerName="State" field="school.state" />
                </AgGridReact>
            </div>
        </div>
    );
}

export default InformationViewer;