import React, { useEffect, useState } from 'react';
import DetailViewer from '../DetailViewer.js';


function Costs(props) {
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
    { headerName: "College Cost", field: "Amount", width: 500 }
  ];
}

function getDetailCellRendererParams() {
  return {
    detailGridOptions: {
      columnDefs: [
        { field: 'name', width: 500 },
        { field: 'alias' }
      ]
    },
    getDetailRowData: params => {
      params.successCallback(params.data.schools);
    }
  }
}

function getGroupedData(data) {
  const grouped = data && data.reduce((acc, cur, idx) => {
    if (cur.latest && cur.latest.cost.avg_net_price.overall) {
      for (let cost of cur.latest.cost.avg_net_price.overall) {
        if (!acc.hasOwnProperty(cost.code)) {
          acc[cost.code] = {
            code: cost.code,
            title: cost.title,
            schoolMap: {}
          };
        }
        const costCode = acc[cost.code];
        if (!costCode.schoolMap.hasOwnProperty(cur.school.name)) {
          costCode.schoolMap[cur.school.name] = cur.school;
        }
      }
    }
    return acc;
  }, {});
  if (grouped) {
    const costs = Object.keys(grouped).map((costCode) => {
      const costBase = { ...grouped[costCode] };
      costBase.schools = Object.keys(costBase.schoolMap).map(schoolName => costBase.schoolMap[schoolName]);
      delete costBase.schoolMap;
      costBase.schools.sort((a, b) => a.name > b.name ? 1 : -1);
      return costBase;
    });
    costs.sort((a, b) => a.title > b.title ? 1 : -1);
    return costs;
  }
  return [];
}

export default Costs
