import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";



const ChartFilters =  function(){
    const dispatch  = useDispatch();
    const  [selectedStatus, setSelectedStatus] = useState();
    const  [selectedType, setSelectedType] = useState();
    const  [selectedPriority, setSelectedPriority] = useState();

    const statusType = useSelector((state) => state.statustype.statustype);
    const priority = useSelector((state) => state.priority.priority);
    const issuetype = useSelector((state) => state.issuetype.issuetype);


    const clearFilters = () => {
        dispatch({type:'SET_ISSUE_TYPE', payload:undefined } );
        dispatch({type:'SET_STATUS_TYPE', payload:undefined } );
        dispatch({type:'SET_PRIORITY', payload:undefined } );
        setSelectedStatus('zed');
        setSelectedType('zed');
        setSelectedPriority('zed');



    }
    const setStatusFilter = (q) => {
        if(q!=='zed'){
            dispatch({type:'SET_STATUS_TYPE', payload:q } );
            setSelectedStatus(q);
        }else{
            dispatch({type:'SET_STATUS_TYPE', payload:undefined } );
            setSelectedStatus('zed');
        }

    }
    const setIssueTypeFilter = (q) => {
        if(q!=='zed'){
            dispatch({type:'SET_ISSUE_TYPE', payload:q } );
            setSelectedType(q);
        }else{
            dispatch({type:'SET_ISSUE_TYPE', payload:undefined } );
            setSelectedType('zed')
        }

    }
    const setPTypeFilter = (q) => {

        if(q!=='zed'){
            dispatch({type:'SET_PRIORITY', payload:q } );
            setSelectedPriority(q);
        }else{
            dispatch({type:'SET_PRIORITY', payload:undefined } );
            setSelectedPriority('zed');
        }
    }

    return(
        <div className="controlList">

            <div>
            <select className="form-control m5" value={selectedType} onChange={event => setIssueTypeFilter(event.target.value)} >
                <option  className="form-control" value='zed' >-select issue type-</option>
                <option className="form-control" value="BUG">BUG</option>
                <option className="form-control" value="TASK">TASK</option>
                <option  className="form-control" value="SUB-TASK">SUB-TASK</option>
                <option  className="form-control" value="IMPROVEMENT">IMPROVEMENT</option>
                <option className="form-control" value="STORY">STORY</option>
            </select>
            </div>
            <div>

            <select className="form-control m5"  value={selectedStatus} onChange={event => setStatusFilter(event.target.value)} >
                <option value="zed"  >-select status-</option>
                <option value="READY FOR PROD">READY FOR PROD</option>
                <option value="IN STAGING">IN STAGING</option>
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="IN REVIEW">IN REVIEW</option>
                <option value="TODO">TODO</option>
                <option value="BACKLOG">BACKLOG</option>
            </select>
            </div>
           <div>
            <select className="form-control m5" value={selectedPriority} onChange={event => setPTypeFilter(event.target.value)} >

                <option value="zed" >-select priority-</option>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
                <option value="HIGHEST">HIGHEST</option>
            </select>
           </div>
            <button className="btn btn-success" onClick={event => clearFilters()} >Clear Filters</button>

        </div>
    )


}

export default ChartFilters;
