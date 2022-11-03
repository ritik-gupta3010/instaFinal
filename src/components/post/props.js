import {deleteData,updateData} from "../../redux/actions/postActions"

const mapDispatchToProps = (dispatch) => ({
    deleteData: (id) => dispatch(deleteData(id)),
    updateData: (postId,post) => dispatch(updateData(postId,post))
  });

export{
    mapDispatchToProps
}