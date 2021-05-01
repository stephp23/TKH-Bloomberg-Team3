import React, { useState } from 'react';
import InformationViewer from '../InformationViewer';

function Schools(props) {
    const columns = getColumns();
    const [columnDefs, setColumnDefs] = useState(columns);
    return (
        <div className="flex-column">
            <div className="flex flex-1">
                <div className="flex-column flex-1">
                    <InformationViewer onCellClicked={onCellClicked}rowData={props.data} columnDefs={columnDefs}></InformationViewer>
                </div>
            </div>
        </div>
    );
}

function getColumns() {
    return [
        { headerName: "School", field: "school.name" },
        { headerName: "State", field: "school.state", width: 75 },
        { headerName: "Zip", field: "school.zip", width: 125 },
        { 
            headerName: "Link", 
            colId: "schoolUrl", 
            width: 75, 
            valueGetter: (params) => { return params.data.school.school_url },
            cellRenderer: function(params) {
                return 'Info';
           },
           cellClass: 'cursor-pointer'
        },

    ]
}

function onCellClicked(column) {
    switch (column.column.colId) {
        case 'schoolUrl':
            window.open(column.value);
            break;
        default:
            break;
    }
}

export default Schools;