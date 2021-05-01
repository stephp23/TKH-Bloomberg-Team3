import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function DetailViewer(props) {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    useEffect(() => {
        setRowData(props.rowData);
    }, [props.rowData]);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="ag-theme-balham" style={{ height: '100%', boxSizing: 'border-box' }}>
                <AgGridReact
                    style={{ width: '100%', height: '100%;' }}
                    columnDefs={props.columnDefs}
                    defaultColDef={defaultColDef()}
                    onGridReady={onGridReady}
                    onCellClicked={props.onCellClicked}
                    rowData={rowData}
                    masterDetail={true}
                    detailCellRendererParams={
                        props.detailCellRendererParams
                    }
                    modules={[ClientSideRowModelModule, MasterDetailModule]}>
                </AgGridReact>
            </div>
        </div>
    );
}

function defaultColDef() {
    return {
        width: 150,
        filter: 'agTextColumnFilter',
        sortable: true,
        floatingFilter: true,
        resizable: true,
    }
}

export default DetailViewer;