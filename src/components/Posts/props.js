import {fetchData, fetchLikedPost} from "../../redux/actions/postActions"
//mapStatetoProps is used to get the redux state variable which we are used in our react component
const mapStateToProps = (state) => ({
    postReduxStateVariable: state.post,
    postReduxStateLikedPost:state.saveLikedPosts
})
//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData()),
    fetchLikedPost:()=>dispatch(fetchLikedPost())
})

export {
    mapStateToProps,
    mapDispatchToProps
};