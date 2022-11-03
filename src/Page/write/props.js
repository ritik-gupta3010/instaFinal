import {createData } from "../../redux/actions/postActions";


export const mapDispatchToProps = dispatch => ({
      createData: (data) => {dispatch(createData(data))}
})

// export  {
//     mapDispatchToProps
// }
  