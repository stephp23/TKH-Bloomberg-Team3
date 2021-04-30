import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
        <div class="flex flex-1 info-viewer">
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn headerName="Athlete" field="athlete" />
                <AgGridColumn headerName="Sport" field="sport" />
            </AgGridReact>
        </div>
    );
}

export default InformationViewer;