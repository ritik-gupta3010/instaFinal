
const initialState = {
    data: [],
    error: false,
    singleData:[]
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":
            return { ...state, data: action.data};
        case "DELETE":
            return { ...state}
        case "CREATE":
            console.log("action.data",action.data);
            return { ...state , data:action.data}
        case "UPDATE":
            return { ...state}
        case "ERROR":
            return { ...state, error: action.msg }
        

        default:
            return state
    }
}
export default reducer;


