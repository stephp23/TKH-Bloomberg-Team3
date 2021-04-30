import React, { setState, useEffect, useState } from 'react';
import InformationViewer from './InformationViewer';

function Schools(props) {
    const columns = getColumns();
    const [data, setData] = useState(null);
    const [columnDefs, setColumnDefs] = useState(columns);
    useEffect(async () => {
        const [apiKey, setApiKey] = useState('4GXH1JZZMWLKlc9oP2eb2A8RrDADLndBMR2jGnY2');
        const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`;
        fetch(url).then((resp) => resp.json()).then((data) => {
            console.log(data);
            setData(data);
        });
    }, []);
    return (
        <div className="flex flex-1">
            <h6>Find your School!</h6>
            <InformationViewer rowData={data} columns={columnDefs}></InformationViewer>
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

export default Schools;