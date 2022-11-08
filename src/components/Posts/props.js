import {fetchData} from "../../redux/actions/postActions"
//mapStatetoProps is used to get the redux state variable which we are used in our react component
const mapStateToProps = (state) => ({
    postReduxStateVariable: state.post
})
//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData())
})

export {
    mapStateToProps,
    mapDispatchToProps
};