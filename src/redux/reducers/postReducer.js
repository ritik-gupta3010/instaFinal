
const initialState = {
    data: []
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":
            // return { ...state, data: action.data};
            let reverseData=action.data.reverse();
            return { data: reverseData}
        case "DELETE":
            return { ...state}
        case "CREATE":
            console.log("action.data",action.data);
            // return { ...state , data:action.data}
            return { data: action.data}
        case "UPDATE":
            // return { ...state, data: action.data}
            return { data: action.data}
        // case "GETDATA":
        //     return {...state}
        default:
            return state
    }
}
export default reducer;


