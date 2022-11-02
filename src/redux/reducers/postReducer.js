
const initialState = {
    data: [],
    error: false,
    singleData:[],
    dataObject : [],
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":
            const obj = {};
            action.data.forEach(element => {//unique id 
                obj[element.id] = element;
            })
            state.dataObject = obj;
            console.log(state.dataObject);
            return { ...state, data: action.data , dataObject: obj};
        // case "GETDATA":
        //     const data = action.data;
        //     if(data.length === 0){
        //         window.location.href = "/";
        //     }
        //     return {...state, singleData: action.data  };
        case "DELETE":
            return { ...state}
        case "CREATE":
            console.log("action.data",action.data);
            return { ...state , data:action.data}
        case "UPDATE":
            return { ...state}
        case "ERROR":
            return { ...state, error: action.msg }
        // case "SET_LOADER":
        //     return {...state, isLoading: true};
        // case "CLOSE_LOADER":
        //     return {...state , isLoading: false};
        // case "REGISTER_ERRORS":
        //     return {...state, registerError: action.payload}
        // case "LOGIN_START":
        //     return {...state, isLoading: true};
        // case "LOGIN_SUCCESS":
        //     return {...state, isLoading: false ,};

        default:
            return state
    }
}
export default reducer;


