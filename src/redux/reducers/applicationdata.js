import localData from '../../data/assignment-sample-data.json'
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


export const setapplicationData = (applicationData) => ({
    type: SET_APPLICATION_DATA,
    applicationData
});

const initialState = {
    applicationdata: localData.records
};

export default function applicationdata(state = initialState, action){
    switch (action.type) {
        case SET_APPLICATION_DATA:
            const { applicationdata } = action;
            return { ...state, applicationdata };
        default:
            return state;
    }
};
