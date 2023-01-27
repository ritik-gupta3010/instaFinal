import React from 'react'
import Post from "../post/index"
import Story from '../Story/Story';
import './Posts.css'
import PropTypes from "prop-types"
// import { fetchLikedPost } from '../../redux/actions/postActions';
// import {connect} from "react-redux"
// import {fetchData} from "../../redux/actions/postActions"


class Posts extends React.Component{

    componentDidMount(){
        const {fetchData}=this.props;
        fetchData();
    }
    
    render()
    {
        
        const{postReduxStateVariable}=this.props;
        // const {postReduxStateLikedPost}=this.props;
        // console.log("postReduxStateVariable",postReduxStateVariable);
        // console.log("ritik",postReduxStateLikedPost)
        return(
            <>
            <div className="posts">
                <Story />
                {(postReduxStateVariable.length !== 0) ? postReduxStateVariable && postReduxStateVariable.map(data => (
                <Post post={data}/>
                )) : <h2 className='error'>Sorry! No Post<br />*Create a new Post and see all your post here*</h2>}
            </div> 
            </>
        );
    }
}

Posts.propTypes={
    postReduxStateVariable:PropTypes.array.isRequired,
    fetchData:PropTypes.func.isRequired,
    postReduxStateLikedPost:PropTypes.object.isRequired,
    fetchLikedPost:PropTypes.func.isRequired

}
Posts.defaultProps={
    postReduxStateVariable:[],
    fetchData:()=>{},
    postReduxStateLikedPost:{},
    fetchLikedPost:()=>{}
}
//mapStatetoProps is used to get the redux state variable which we are used in our react component
// const mapStatetoProps = (state) => {
//     console.log(state)
//     return {data: state.data};
// }
//mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = dispatch => ({
//     fetchData: () => dispatch(fetchData())
// })

// export default connect(mapStatetoProps,mapDispatchToProps)(Posts);
export default Posts;