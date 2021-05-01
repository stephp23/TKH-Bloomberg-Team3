import React, { setState, useEffect, useState } from 'react';
import InformationViewer from '../InformationViewer';

function Schools(props) {
    const columns = getColumns();
    const [data, setData] = useState(null);
    const [columnDefs, setColumnDefs] = useState(columns);

    return (
        <div className="flex-column">
            <div className="flex flex-1">
                <div className="flex-column flex-1 pad-10">
                    <h3>Find your School</h3>
                    <InformationViewer rowData={props.route.data} columnDefs={columnDefs}></InformationViewer>
                </div>
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
        { headerName: "School", field: "school.name" },
        { headerName: "State", field: "school.state", width: 75 },
        { headerName: "Zip", field: "school.zip", width: 125 }
    ]
}

export default Schools;