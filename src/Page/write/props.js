import {createData} from "../../redux/actions/postActions";

//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = dispatch => ({
    createData: (data) => dispatch(createData(data))
})

export {
    mapDispatchToProps
}