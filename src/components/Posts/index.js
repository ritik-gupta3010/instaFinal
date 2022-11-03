import {connect } from "react-redux";
import Posts from "./Posts";
import {mapStateToProps,mapDispatchToProps} from "./props"

export default connect(mapStateToProps,mapDispatchToProps)(Posts);