import {createData, fetchData } from "../../redux/actions/postActions";

//mapDispatchToProps is used to dispatch the action
export const mapDispatchToProps = dispatch => ({
      createDataProps: (post) => {dispatch(createData(post))},
      fetchData :()=>{dispatch(fetchData())}
})

// export  {
//     mapDispatchToProps
// }
  