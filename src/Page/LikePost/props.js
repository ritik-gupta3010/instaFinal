import { fetchLikedPost } from "../../redux/actions/postActions";

export const mapStateToProps =(state)=>({
    postReduxStateLikedPost : state.saveLikedPosts,
})

export const mapDispatchToProps =(dispatch)=>({
    fetchLikedPost :()=>{dispatch(fetchLikedPost())},
})