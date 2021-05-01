import "./App.css";
import React, { useEffect, setState, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Schools from "../src/components/Reports/Schools";
import DegreeSearch from "./components/Reports/DegreeSearch";
import Footer from "./components/Footer/Footer";
import { ModuleRegistry } from '@ag-grid-community/core';
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";

ModuleRegistry.registerModules([
    CsvExportModule,
    ExcelExportModule,
    MasterDetailModule
]);

function App() {
  const [data, setData] = useState(null);
  const [groupedSchools, setSchoolData] = useState(null);
  const [apiKey, setApiKey] = useState(
    "6uZ6pdqW450sBe8x01Tsb3LDI0rV6SwkOaAohtGs"
  );
  const baseUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&per_page=25`;

  useEffect(async () => {
    const data = await getAllDataFromFiles();
    // console.log(JSON.stringify(data));
    setData(data);
  });

  // switch to this function when you want to read from json files
  const getAllDataFromFiles = async () => {
    const finders = [];
    const curUrl = (pageNum) => `data/page${pageNum}.json`;
    for (let x = 0; x < 6; x++) {
      finders.push(
        fetch(curUrl(x), {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((resp) => resp.json())
      );
    }
    return await Promise.all(finders).then((values) => {
      return values.reduce((acc, cur, idx) => {
        // When you want to read from the json files, you will have to use curr
        // instead since the json file consist of just the result array
        if (cur) {
          acc.push(...cur);
        }
        return acc;
      }, []);
    });
  };

  const getAllDataFromApi = async () => {
    const finders = [];
    const curUrl = (pageNum) => `${baseUrl}&page=${pageNum}`;
    // By going based on increments of 4 (x = 30, 31, 32, 33, 34), there will be 100 records pulled in total
    for (let x = 30; x < 35; x++) {
      finders.push(
        fetch(curUrl(x)).then((resp) => resp.json())
      );
    }
    return await Promise.all(finders).then((values) => {
      return values.reduce((acc, cur, idx) => {
        if (cur && cur.results) {
          acc.push(...cur.results);
        }
        return acc;
      }, []);
    });
  };

  return (
    <div className="flex-column flex-1">
      <div className="header-div">
        <Header />
      </div>
      <div className="flex-column flex-1 pad-10">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schools" exact render={() => <Schools data={data} groupedSchools={groupedSchools} />} />
          <Route path="/degrees" exact render={() => <DegreeSearch data={data} groupedSchools={groupedSchools} />} />
        </Switch>
      </div>
      <div className="flex footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default App;
