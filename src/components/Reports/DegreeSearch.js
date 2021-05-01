import React, { useEffect, useState } from 'react';
import DetailViewer from '../DetailViewer.js';


function DegreeSearch(props) {
  const columns = getColumns();
  const [data, setData] = useState(null);
  const [columnDefs, setColumnDefs] = useState(columns);
  useEffect(() => {
    const groupedData = getGroupedData(props.data);
    setData(groupedData);
  }, [props.data]);
  return (
    <div className="flex-column">
      <DetailViewer rowData={data} columnDefs={columnDefs}></DetailViewer>
    </div>
  );
}

function getColumns() {
  return [
    { headerName: "Major", field: "title", width: 500 }
  ];
}

function getGroupedData(data) {
  const grouped = data && data.reduce((acc, cur, idx) => {
    if (cur.latest && cur.latest.programs) {
      for (let major of cur.latest.programs.cip_4_digit) {
        if (!acc.hasOwnProperty(major.code)) {
          acc[major.code] = {
            code: major.code,
            title: major.title,
            schools: []
          }
        }
        acc[major.code].schools.push(cur.school);
      }
    }
    return acc;
  }, {});
  if (grouped) {
    return Object.keys(grouped).map((majorCode) => {
      return grouped[majorCode];
    });
  }
  return [];
}

export default DegreeSearch
