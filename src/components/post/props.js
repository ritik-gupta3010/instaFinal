import {
  commentPost,
  deleteData,
  saveLikePost,
  removeLikePost,
  savePost,
  removePost,
} from "../../redux/actions/postActions";

const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(deleteData(id)),
  commentPost: (postId, post) => dispatch(commentPost(postId, post)),
  saveLikePost: (post) => dispatch(saveLikePost(post)),
  removeLikePost: (post) => dispatch(removeLikePost(post)),
  savePost: (post) => dispatch(savePost(post)),
  removePost: (post) => dispatch(removePost(post)),
  // updateData: (postId,post) => dispatch(updateData(postId,post))
});
export { mapDispatchToProps };
// const mapStateToProps=(state)=>({
//   saveLikedPosts:state.saveLikedPosts,
//   savePosts:state.savePosts,
// })
// export { mapDispatchToProps,mapStateToProps };
