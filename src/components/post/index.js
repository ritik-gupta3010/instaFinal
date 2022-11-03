import {connect } from "react-redux";
import Post from "./Post"
import {mapDispatchToProps} from "./props";

export default connect(null, mapDispatchToProps)(Post);