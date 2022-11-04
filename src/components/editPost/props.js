import {updateData} from "../../redux/actions/postActions"

//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = (dispatch) => ({
    updateData: (postId,post) => dispatch(updateData(postId,post))
});
export {
    mapDispatchToProps
}
