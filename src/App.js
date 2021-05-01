import "./App.css";
import React, { useEffect, setState, useState, Fragment } from "react";
import { Switch, Route, Link, BrowserRouter
} from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";

import Home from "./components/Home/Home";
import Schools from "../src/components/Reports/Schools";
import DegreeSearch from "./components/Reports/DegreeSearch";
import Footer from "./components/Footer/Footer";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
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

  // const getAllDataFromApi = async () => {
  //   const finders = [];
  //   const curUrl = (pageNum) => `${baseUrl}&page=${pageNum}`;
  //   // By going based on increments of 4 (x = 30, 31, 32, 33, 34), there will be 100 records pulled in total
  //   for (let x = 30; x < 35; x++) {
  //     finders.push(
  //       fetch(curUrl(x)).then((resp) => resp.json())
  //     );
  //   }
  //   return await Promise.all(finders).then((values) => {
  //     return values.reduce((acc, cur, idx) => {
  //       if (cur && cur.results) {
  //         acc.push(...cur.results);
  //       }
  //       return acc;
  //     }, []);
  //   });
  // };

  const allTabs = getTabs();
  console.log(allTabs);
  return (
    <div className="flex-column flex-1">
      <div className="flex flex-1">
        <BrowserRouter>
          <div className="App">
            <Route
              path="/"
              render={({ location }) => (
                <Fragment>
                  <Tabs value={location.pathname}>
                    <Tab label="Home" value={allTabs[0].name} component={Link} to={allTabs[0].route} />
                    <Tab label="Schools" value={allTabs[1].name} component={Link} to={allTabs[1].route} />
                    <Tab label="Degree Search" value={allTabs[2].name} component={Link} to={allTabs[2].route} />
                  </Tabs>
                  <Switch>
                    <Route path={allTabs[0].route} render={(Home)} />
                    <Route path={allTabs[1].route} exact render={() => <Schools data={data} groupedSchools={groupedSchools} />} />
                    <Route path={allTabs[2].route} exact render={() => <DegreeSearch data={data} groupedSchools={groupedSchools} />} />
                  </Switch>
                </Fragment>
              )}
            />
          </div>
        </BrowserRouter>
      </div>
      <div className="flex footer-div">
        <Footer />
      </div>
    </div>
  );
}

function getTabs() {
  return [
    {name: 'Home', route: '/'}, 
    {name: 'Schools', route:'/schools'}, 
    {name: 'Degrees', route: '/degrees'}
  ];
}

export default App;


