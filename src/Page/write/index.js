import {connect} from 'react-redux';
import { mapDispatchToProps } from './props';
import Write from "./Write";

export default connect(null,mapDispatchToProps)(Write);