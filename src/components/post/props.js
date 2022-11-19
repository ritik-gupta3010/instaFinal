import {
  commentPost,
  deleteData,
  saveLikePost,
  removeLikePost,
  savePost,
  removePost,
  fetchLikedPost
} from "../../redux/actions/postActions";

const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(deleteData(id)),
  commentPost: (postId, post) => dispatch(commentPost(postId, post)),
  saveLikePost: (post) => dispatch(saveLikePost(post)),
  removeLikePost: (post) => dispatch(removeLikePost(post)),
  fetchLikedPost:()=>dispatch(fetchLikedPost()),
  savePost: (post) => dispatch(savePost(post)),
  removePost: (post) => dispatch(removePost(post)),
  // updateData: (postId,post) => dispatch(updateData(postId,post))
});


const mapStateToProps = (state) => ({
  
  postReduxStateLikedPost:state.saveLikedPosts
})
export { mapDispatchToProps,mapStateToProps };
