import { toast } from "react-toastify";
const initialState = {
    post: [],
    saveLikedPosts:{},
    savePosts:{},
    comment:{}
}

const reducer = (state =initialState, action) => {
    switch (action.type) {
        case "FetchData":         // here we return state jo state me pahle data tha and jo new chanhe h unhe add kar de
            
            let reverseData=action.data.reverse();
            return { post: reverseData}
        case "DELETE":
            return { ...state}
        case "CREATE":
            
            // return { ...state , post:action.data}
            return {...state}
        case "UPDATE":
            // return { ...state, post: action.data}
            return { ...state}
        case "COMMENT":
            return {...state}
        case "COMMENTINITIALLY":
            return {...state}
        case "FETCHPOSTCOMMENT":
            // console.log(action.data)
            
            return {...state,comment:action.data}
        case "FETCHLIKEDPOST" :{
            
            return {...state,saveLikedPosts:action.data}
        }
        case "DELETEPOSTCOMMENT":
            return {...state}
        case "SAVELIKEPOST":{
            // console.log("SAVELIKEPOST",action.data)
            const {data}=action;
            // console.log("data",data)
            const {saveLikedPosts}=state;
            let updatedSaveLikedPosts=Object.assign({[data.id]:data},saveLikedPosts);
            console.log("updatedSaveLikedPosts",updatedSaveLikedPosts)
            toast.success("You have liked this post")
            return {...state,saveLikedPosts:updatedSaveLikedPosts}
        }
        case "REMOVELIKEPOST":{
            // console.log("REMOVELIKEPOST",action.data)
            const {data}=action;
            // console.log(data);
            const {saveLikedPosts}=state;
            let updatedRemoveLikedPosts=Object.assign({},saveLikedPosts);

            delete updatedRemoveLikedPosts[data.id]
            // delete saveLikedPosts[data.id];
            // toast.success("You have unlike this post")
            // console.log("REMOVELIKEPOST",saveLikedPosts)
            // console.log("updatedRemoveLikedPosts",updatedRemoveLikedPosts)
            return {...state,saveLikedPosts:updatedRemoveLikedPosts}
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


