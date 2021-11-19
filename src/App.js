import {useSelector, useDispatch, Provider} from "react-redux";

import './App.css';
import {useEffect, useState} from "react";
import {setStautsType} from "./redux/reducers/statustype";
import {setIssueType} from "./redux/reducers/issuetype";
import {setPriority} from "./redux/reducers/priority";
import ChartHolder from "./components/ChartHolder/Chartholder";
import ChartFilters from "./components/ChartFilters/Chartfilters"
import store from "../src/redux/reduxconfig"
function App() {






  return (

        <div>
            <Provider store={store} >
                <ChartFilters ></ChartFilters>
                <ChartHolder ></ChartHolder>
            </Provider>
        </div>

  );
}

export default App;
