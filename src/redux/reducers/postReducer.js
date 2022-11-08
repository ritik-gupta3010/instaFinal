
const initialState = {
    post: []
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":                                // here we return state jo state me pahle data tha
            // return { ...state, post: action.data};
            // console.log("action.data in fetch",action.data);
            let reverseData=action.data.reverse();
            return { post: reverseData}
        case "DELETE":
            return { ...state}
        case "CREATE":
            // console.log("action.data",action.data);
            // return { ...state , post:action.data}
            return { post: action.data}
        case "UPDATE":
            // return { ...state, post: action.data}
            return { post: action.data}
        // case "GETDATA":
        //     return {...state}
        default:
            return state
    }
}
export default reducer;


