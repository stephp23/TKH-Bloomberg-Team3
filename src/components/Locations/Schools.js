import React, { setState, useEffect, useState } from 'react';
import InformationViewer from '../InformationViewer';
import Sidebar from '../Sidebar';

function Schools(props) {
    const columns = getColumns();
    const [data, setData] = useState(null);
    const [columnDefs, setColumnDefs] = useState(columns);
    const [apiKey, setApiKey] = useState('4GXH1JZZMWLKlc9oP2eb2A8RrDADLndBMR2jGnY2');
    const baseUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&per_page=100`;


    useEffect(async () => {
        const data = await getAllData();
        console.log(data);
        setData(data);
    }, []);

    const getAllData = async () => {
        const finders = [];
        //const curUrl = (pageNum) => `${baseUrl}&page=${pageNum}`;
        const curUrl = (pageNum) => `data/page${pageNum}.json`;
        for (let x = 0; x < 4; x++) {
            finders.push(
                fetch(curUrl(x), {headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }}).then(resp => resp.json()));
        }
        return await Promise.all(finders).then((values) => {
            return values.reduce((acc, cur, idx) => {
                if (cur && cur.results){
                    acc.push(...cur.results);
                }
                return acc;
            }, []);
        });
    }
  return (
    <div className="flex-column">
      
      <div className="flex flex-1">
      
    <div className="flex-column flex-1 pad-10">
      <Sidebar />  
            <h3>Find your School</h3>
          <InformationViewer rowData={data} columnDefs={columnDefs}></InformationViewer>
          
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