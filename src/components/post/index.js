import {connect } from "react-redux";
import Post from "./Post"
// import {mapDispatchToProps} from "./props";
import {mapStateToProps, mapDispatchToProps} from "./props";

export default connect(mapStateToProps, mapDispatchToProps)(Post);

// export default connect(null, mapDispatchToProps)(Post);