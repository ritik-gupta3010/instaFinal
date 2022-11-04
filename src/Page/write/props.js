import {createData } from "../../redux/actions/postActions";

//mapDispatchToProps is used to dispatch the action
export const mapDispatchToProps = dispatch => ({
      createDataProps: (data) => {dispatch(createData(data))}
})

// export  {
//     mapDispatchToProps
// }
  