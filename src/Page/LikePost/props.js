import { fetchLikedPost,fetchPostComment ,fetchData} from "../../redux/actions/postActions";

export const mapStateToProps =(state)=>({
    postReduxStateLikedPost : state.saveLikedPosts,
    reduxCommentVar:state.comment,
    postReduxStateVariable: state.post,
})

export const mapDispatchToProps =(dispatch)=>({
    fetchLikedPost :()=>{dispatch(fetchLikedPost())},
    fetchPostComment: () => {dispatch(fetchPostComment())},
    fetchData :()=>{dispatch(fetchData())}
    
})