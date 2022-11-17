import {commentPost, deleteData} from "../../redux/actions/postActions"

const mapDispatchToProps = (dispatch) => ({
    deleteData: (id) => dispatch(deleteData(id)),
    commentPost: (postId,post)=>dispatch(commentPost(postId,post))
    // updateData: (postId,post) => dispatch(updateData(postId,post))

  });

export{
    mapDispatchToProps
}