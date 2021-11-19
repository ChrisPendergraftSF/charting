import React,  {useCallback, useEffect, useState  } from 'react';
import {useSelector} from "react-redux";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartHolder =  function({data}){
    const [filteredData, setFilteredData] = useState(undefined)

    const statusType = useSelector((state) => state.statustype.statustype);
    const priority = useSelector((state) => state.priority.priority);
    const issuetype = useSelector((state) => state.issuetype.issuetype);

    const processAssigneeCount = (_data) => {
        let helper = [];
        _data.map((item, index)=>{

             const obj = {}
             obj.assignee = item.assignee;
             obj.tracks = [];
             let isItThere = helper.findIndex(function (_item) {
                return _item.assignee === item.assignee ;
              });

                if (isItThere === -1){
                    obj.tracks.push(item);
                    helper.push(obj);

                } else {
                    helper[isItThere].tracks.push(item);
                }


        });


        console.log('data__', helper);
        return helper;

    }

    const handleStatusFilter = useCallback(()=>{
        console.log('status', issuetype, statusType, priority)
        let result = data;
        if (statusType!==undefined) {
            result = result.filter((_d) => {
                let srch = [];

                srch = (_d.status.toLowerCase() === statusType.toLowerCase());

                return srch;
            });
        }
        if (issuetype!==undefined) {
            result = result.filter((_d) => {
                let srch = [];

                srch = (_d.issue_type.toLowerCase() === issuetype.toLowerCase());

                return srch;
            });
        }
        if (priority!==undefined) {
            result = result.filter((_d) => {
                let srch = [];

                srch = (_d.priority.toLowerCase() === priority.toLowerCase());

                return srch;
            });
        }
        const final  = result.sort((a,b) =>  (a.assignee > b.assignee ? 1 : -1));
        console.log('final', final);
        setFilteredData(processAssigneeCount(final));
    },[setFilteredData, data, statusType, issuetype, priority]);


    useEffect(()=>{

        if(issuetype!==undefined || statusType!==undefined  || priority!==undefined  ){
            console.log('useEffectStatus', issuetype, statusType, priority );
            handleStatusFilter();
        }else{handleStatusFilter();}
    },[ handleStatusFilter, issuetype, statusType, priority])

    useEffect(()=>{
        if(data && filteredData===undefined){
            handleStatusFilter();
        }

    },[setFilteredData,filteredData, handleStatusFilter, data])

    return(
       <div className="App">
            { filteredData && <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={350}
                    data={filteredData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis interval={0}  dataKey="assignee" tick={{ angle: 30, textAnchor: 'start', fontSize:9, 'dominantBaseline': 'ideographic' }} />
                    <YAxis dataKey="tracks.length" />
                    <Tooltip />

                    <Legend  wrapperStyle={{top: 0, left: 25}} />
                    <br/>
                    <Bar dataKey="assignee" fill="#8884d8" />
                    <Bar   dataKey="tracks.length" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>}
       </div>
    )

};



export default ChartHolder;
