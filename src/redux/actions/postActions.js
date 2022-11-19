import axios from 'axios';
import { toast } from "react-toastify";
// const axios = require("axios");
// import 'react-toastify/dist/ReactToastify.css';


export const fetchData = () => {    //action creator return action
    return (dispatch) => {
        axios.get(`http://localhost:3000/post`)
            .then(response => {
                // console.log(response.data);
                dispatch({
                    type: "FetchData",
                    data: response.data
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to fetch data" 
                })
            })
    }
}
export const deleteData = (postId) => {
    // console.log("call huya delete")
    return (dispatch) => { 
        // console.log("delete")
        // console.log(postId)
        axios.delete('http://localhost:3000/post/'+postId)
            .then(response => {
                // alert("Post deleted successfully")
                toast.success("Post deleted successfully");
                
                dispatch({
                    type: "DELETE",
                    id: postId
                })
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to delete data" 
                })
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);           
    }
}



export const createData = (post) => {
    // console.log("before");
    return (dispatch) => {
        // console.log("before1")
        axios.post('http://localhost:3000/post',post)

            .then(response => {
                // console.log("after");
                // alert("Post created successfully");
                toast.success("Post created successfully");
                // toast.success("Post created successfully");
                // console.log("Post created successfully1");
                dispatch({
                    type: "CREATE",
                    data: response.data,
                })
                
            })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to create data" 
                })
            })

    }
}

export const updateData = (postId,post) => {
    return (dispatch) => {
        // console.log("update");
        axios.put('http://localhost:3000/post/'+postId,post)
            .then(response => {
                // alert("update")
                // console.log("update" ,response.data);
                toast.success("Post updated successfully");
                dispatch({
                    type: "UPDATE",
                    data: response.data,
                })
            })
            //callback example
            // .then(()=>{                                     
            //     setTimeout(()=>{
            //         dispatch({
            //             deleteData();
            //         })
            //     },1000)
            // })
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to update data" 
                })
            })
            
    }
}
export const commentPost = (postId,post) => {

    return (dispatch) => {
        // console.log("update");
        axios.put('http://localhost:3000/post/'+postId,post)
            .then(response => {
                // alert("update")
                // console.log("update" ,response.data);
                toast.success("comments");
                dispatch({
                    type: "COMMENT",
                    data: response.data,
                })
            })
            
            .catch(err => {
                dispatch({ 
                    type: "ERROR",
                    msg: "Unable to update data" 
                })
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
    }
}

export const saveLikePost=(post)=>{
    // console.log(post)
    return (dispatch)=>{
            dispatch({
                type: "SAVELIKEPOST",
                data: post,
            })
        
    }
}
export const removeLikePost=(post)=>{
    return (dispatch)=>{
            dispatch({
                type: "REMOVELIKEPOST",
                data: post,
            })
        
    }
}
export const savePost=(post)=>{
    // console.log(post)
    return (dispatch)=>{
            dispatch({
                type: "SAVEPOST",
                data: post,
            })
        
    }
}
export const removePost=(post)=>{
    return (dispatch)=>{
            dispatch({
                type: "REMOVEPOST",
                data: post,
            })
        
    }
}
// export const updateComments=(comment)=>
// {
//     return (dispatch)=>{
//         dispatch(
//             {
//                 type:"UPDATE_COMMENT",
//                 data:comment
//             }
//         )
//     }
// }
// export const getData=()=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"GETDATA"
//         })
//     }
// }
