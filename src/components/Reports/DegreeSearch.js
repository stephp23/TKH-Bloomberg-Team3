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
            schoolMap: {}
          };
        }
        const majorCode = acc[major.code];
        if (!majorCode.schoolMap.hasOwnProperty(cur.school.name)) {
          majorCode.schoolMap[cur.school.name] = cur.school;
        }
      }
    }
    return acc;
  }, {});
  if (grouped) {
    return Object.keys(grouped).map((majorCode) => {
      const majorBase = { ...grouped[majorCode] };
      majorBase.schools = Object.keys(majorBase.schoolMap).map(schoolName => majorBase.schoolMap[schoolName]);
      delete majorBase.schoolMap;
      return majorBase;
    });
  }
  return [];
}

export default DegreeSearch
