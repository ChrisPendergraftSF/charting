import { combineReducers, createStore, applyMiddleware } from "redux";
import applicationdata from "./reducers/applicationdata";
import issuetype from "./reducers/issuetype";
import priority from "./reducers/priority";
import statustype from "./reducers/statustype";
import { logger } from 'redux-logger'
const reducer = combineReducers({

    applicationdata: applicationdata,
    issuetype: issuetype,
    priority: priority,
    statustype: statustype,

});



const middleware = [ logger];


const store = createStore(reducer, {}, applyMiddleware(...middleware) );



export default store;
