import {updateData} from "../../redux/actions/postActions"

//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = (dispatch) => ({
    updateData: (postId,post) => dispatch(updateData(postId,post))
});
//mapStatetoProps is used to get the redux state variable which we are used in our react component
// const mapStateToProps = (state) => ({
//     Postdata: state.singleData
// })
export {
    // mapStateToProps,
    mapDispatchToProps
}
