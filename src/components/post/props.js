import {
  commentPost,
  deleteData,
  saveLikePost,
  removeLikePost,
  savePost,
  removePost,
  fetchData,
  fetchLikedPost,
  commentPostInitially,
  fetchPostComment,
  deletePostComment,
} from "../../redux/actions/postActions";

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  deleteData: (id) => dispatch(deleteData(id)),
  commentPost: (post) => dispatch(commentPost(post)),
  commentPostInitially: (postCId) => dispatch(commentPostInitially(postCId)),
  fetchPostComment: () => dispatch(fetchPostComment()),
  saveLikePost: (post) => dispatch(saveLikePost(post)),
  removeLikePost: (post) => dispatch(removeLikePost(post)),
  fetchLikedPost:()=>dispatch(fetchLikedPost()),
  savePost: (post) => dispatch(savePost(post)),
  removePost: (post) => dispatch(removePost(post)),
  deletePostComment:(postId)=>dispatch(deletePostComment(postId)),
  // updateData: (postId,post) => dispatch(updateData(postId,post))
});


const mapStateToProps = (state) => ({
  postReduxStateLikedPost:state.saveLikedPosts,
  reduxCommentVar:state.comment,
  
})
export { mapDispatchToProps,mapStateToProps };
