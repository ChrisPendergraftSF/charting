export const SET_ISSUE_TYPE = "SET_ISSUE_TYPE";

export const setIssueType = (issuetype) => ({
    type: SET_ISSUE_TYPE,
    payload: issuetype
});

const initialState = {
    issuetype: undefined
};

export default function issuetype(state = initialState, action){
    switch (action.type) {
        case SET_ISSUE_TYPE:
            console.log('SET_ISSUE_TYPE', action)

            return { ...state, issuetype: action.payload };
        default:
            return state;
    }
};
