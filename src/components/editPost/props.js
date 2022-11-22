import {updateData,fetchData, fetchLikedPost} from "../../redux/actions/postActions"

//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = (dispatch) => ({
    updateData: (postId,post) => dispatch(updateData(postId,post)),
    fetchData: ()=>dispatch(fetchData()),
    fetchLikedPost:()=>dispatch(fetchLikedPost())
});
export {
    mapDispatchToProps
}
