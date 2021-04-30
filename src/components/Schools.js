import React, { setState, useEffect, useState } from 'react';
import InformationViewer from './InformationViewer';

function Schools(props) {
    const columns = getColumns();
    const [data, setData] = useState(null);
    const [columnDefs, setColumnDefs] = useState(columns);
    const [apiKey, setApiKey] = useState('4GXH1JZZMWLKlc9oP2eb2A8RrDADLndBMR2jGnY2');
    let pageCtr = 0;
    let collegeData = [];
    let hasResults = true;

    useEffect(async () => {
        const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`;
        await getAllData();
        setData(collegeData);
    }, []);

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