export const SET_PRIORITY = "SET_PRIORITY";

export const setPriority = (priority) => ({
    type: SET_PRIORITY,
    priority
});

const initialState = {
    priority: undefined
};

export default function priority(state = initialState, action){
    switch (action.type) {
        case SET_PRIORITY:
            return { ...state, priority: action.payload };

        default:
            return state;
    }
};
