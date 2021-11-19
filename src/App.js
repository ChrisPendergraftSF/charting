import {  useSelector, useDispatch } from "react-redux";

import './App.css';
import {useEffect, useState} from "react";
import {setStautsType} from "./redux/reducers/statustype";
import {setIssueType} from "./redux/reducers/issuetype";
import {setPriority} from "./redux/reducers/priority";
import ChartHolder from "./components/ChartHolder/Chartholder";
import ChartFilters from "./components/ChartFilters/Chartfilters"
function App() {
  const appData = useSelector((state) => state.applicationdata.applicationdata);






  return (
      <div>
          <ChartFilters ></ChartFilters>
        <ChartHolder data={appData} ></ChartHolder>

      </div>
  );
}

export default App;
