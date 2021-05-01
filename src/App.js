import "./App.css";
import React, { useEffect, setState, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Schools from '../src/components/Reports/Schools';
import DegreeSearch from './components/Reports/Degrees/DegreeSearch';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const data = await getAllData();
    console.log(data);
  }, []);

  const getAllData = async () => {
    const finders = [];
    //const curUrl = (pageNum) => `${baseUrl}&page=${pageNum}`;
    const curUrl = (pageNum) => `data/page${pageNum}.json`;
    for (let x = 0; x < 4; x++) {
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
        if (cur && cur.results) {
          acc.push(...cur.results);
        }
        return acc;
      }, []);
    });
  };

  return (
    <div className="flex-column flex-1 pad-10">
      <Header />
      <div class="flex-column flex-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schools" exact component={Schools} />
          <Route path="/degree" exact component={DegreeSearch} />
        </Switch>
      </div>
      <div class="flex footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default App;
