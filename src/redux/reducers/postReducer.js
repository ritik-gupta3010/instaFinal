import { toast } from "react-toastify";
const initialState = {
    post: [],
    saveLikedPosts:{},
    savePosts:{},
    comment: {}
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":                                // here we return state jo state me pahle data tha and jo new chanhe h unhe add kar de
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
        case "COMMENT":
            return {post:action.data}
        case "FETCHCOMMENT":
            return {comment:action.data}
        case "SAVELIKEPOST":{
            console.log("SAVELIKEPOST",action.data)
            let {data}=action;
            console.log("data",data)
            const {saveLikedPosts}=state;
            let updatedSaveLikedPosts=Object.assign({[data.id]:data},saveLikedPosts);
            console.log("saveLikedPosts",saveLikedPosts)
            console.log("updatedSaveLikedPosts",updatedSaveLikedPosts)
            toast.success("You have liked this post")
            return {...state,saveLikedPosts:updatedSaveLikedPosts}
        }
        case "REMOVELIKEPOST":{
            // console.log("REMOVELIKEPOST",action.data)
            const {data}=action;
            console.log("removelikepostData",data);
            const {saveLikedPosts}=state;
            delete saveLikedPosts[data.id]
            toast.success("You have unlike this post")
            console.log("REMOVELIKEPOST",saveLikedPosts)
            return {...state}
        }

        case "SAVEPOST":{
            // console.log("SAVELIKEPOST",action.data)
            const {data}=action;
            // console.log("data",data)
            const {savePosts}=state;
            let updatedSavePosts=Object.assign({[data.id]:data},savePosts);
            console.log("updatedSavePosts",updatedSavePosts)
            toast.success("You have save this post")
            return {...state,savePosts:updatedSavePosts}
        }
        case "REMOVEPOST":{
            // console.log("REMOVEPOST",action.data)
            const {data}=action;
            console.log(data);
            const {savePosts}=state;
            delete savePosts[data.id]
            toast.success("You have unsave this post")
            console.log("REMOVEPOST",savePosts)
            return {...state}
        }
        // case "GETDATA":
        //     return {...state}
        // case "UPDATE_COMMENT":
            
        //     return {...state,}
        default:
            return state
    }
}
export default reducer;


