import React from "react";
import "./Post.css";
// import {updateData} from "../../redux/actions/postActions";
// import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditPost from "../editPost/index";

import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLike: "fa fa-heart-o postBottomIcon",
      styleSave: "fa fa-bookmark-o postBottomRight",
      openDelete: false,
      openEdit: false,
      descFull: "",
      more: "...more",
      comment: false,
      commentReply: "",
      commentReplyObject:{},
    };
  }
  handleClickOpenEdit = () => {
    const { openEdit } = this.state;
    this.setState({ openEdit: !openEdit });
  };
  handleClickOpenDelete = () => {
    this.setState({ openDelete: true });
  };
  handleClickDelete = () => {
    this.setState({ openDelete: false });
  };
  handleClickLike = () => {
    const { styleLike } = this.state;
    styleLike === "fa fa-heart-o postBottomIcon"
      ? this.setState({ styleLike: "fa fa-heart postBottomIconClick" })
      : this.setState({ styleLike: "fa fa-heart-o postBottomIcon" });
  };
  handleClickSave = () => {
    const { styleSave } = this.state;
    styleSave === "fa fa-bookmark-o postBottomRight"
      ? this.setState({ styleSave: "fa fa-bookmark postBottomRight" })
      : this.setState({ styleSave: "fa fa-bookmark-o postBottomRight" });
  };
  handelDeletePost = (id) => {
    const { deleteData } = this.props;
    deleteData(id);
  };
  handleClickDescFull = () => {
    const { post } = this.props;
    this.setState({ descFull: post.desc, more: "" });
    // post.desc=""
  };
  handleClickComment = () => {
    this.setState({ comment: !this.state.comment });
  };
  handleClickCommentEnter = () => {
    const {post,commentPost}=this.props;
    const {commentReplyObject}=this.state;
    const updatedPostComment={
      img:post.img,
      location:post.location,
      desc:post.desc,
      comments:Object.assign(post.comments,commentReplyObject),
    }
    commentPost(post.id,updatedPostComment);
  };
  handleClickCommentReply = (e) => {
    e.preventDefault();
    const {commentReply}=this.state
    // console.log("e.target.value",e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    
    let obj={[commentReply]:commentReply};
    console.log("obj",obj);
    this.setState({commentReplyObject:obj})
    Object.assign({commentReply},this.state.commentReplyObject)
  };

  render() {
    const { post } = this.props;
    const {comments}=post;
    console.log("props",Object.values(comments).length);
    const {
      openDelete,
      openEdit,
      styleLike,
      styleSave,
      comment,
      commentReply,
    } = this.state;
    console.log("comment", commentReply);
    // console.log("in post", post);
    console.log("post.comments",post.comments)
    // console.log(post.comments.length)
    return (
      <>
        <div className="post">
          <div className="postTop">
            <div style={{ display: "flex", width: "80%" }}>
              <img
                src={post.img}
                alt="postImage"
                className="postTopIcon"
                id="userImg"
              />
              <span className="postTopIconLocation" id="location">
                <b>{post.location}</b>
              </span>
            </div>
            <div className="postTopIconRight">
              <i
                className="singlePostIcon fa fa-pencil-square-o"
                aria-hidden="true"
                onClick={() => {
                  this.handleClickOpenEdit();
                }}
                id="editButton"
              ></i>
              <i
                className="singlePostIcon fa fa-trash"
                aria-hidden="true"
                onClick={() => {
                  this.handleClickOpenDelete();
                }}
                id="deleteButton"
              ></i>
            </div>
          </div>
          <img src={post.img} alt="postImage" className="postImage" />

          <div className="postBottom">
            <div>
              <i
                class={styleLike}
                aria-hidden="true"
                onClick={() => {
                  this.handleClickLike();
                }}
                id="like"
              ></i>
            </div>
            
            <div>
              <i
                class="fa fa-comment-o postBottomComment"
                aria-hidden="true"
                onClick={() => {
                  this.handleClickComment();
                }}
              ></i>
            </div>
            <div>
              <i
                class={styleSave}
                aria-hidden="true"
                onClick={() => {
                  this.handleClickSave();
                }}
                id="save"
              ></i>
            </div>
            
          </div>
          <div className="postBottomDesc">
            <div title={post.desc} id="desc" className="desc">
              {post.desc && post.desc.slice(0, 49)}
              {post.desc && post.desc.length > 49 ? (
                <span
                  onClick={() => {
                    this.handleClickDescFull();
                  }}
                >
                  {this.state.more}
                </span>
              ) : (
                ""
              )}
              {this.state.descFull &&
                this.state.descFull.slice(49, this.state.descFull.length)}
              
            </div>
          </div>
          {comment ?(
            Object.values(comments).length>0 && Object.values(comments).forEach(comment=>{
              <div style={{}}>
                {comment}
              </div>
            })
          ):"No Comments"}
          {comment ? (

            
            <div className="comment">
              <TextField
                type="text"
                id="input-with-icon-textfield"
                sx={{ width: "94%", marginLeft: "3%", border: "none" }}
                label="Comment..."
                name="commentReply"
                value={commentReply}
                onChange={
                  this.handleClickCommentReply
                }
                InputProps={{
                  
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendIcon

                        onClick={() => {
                          this.handleClickCommentEnter();
                        }}
                        sx={{cursor:"pointer"}}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              
            </div>
            
          ) : (
            ""
          )}
        </div>
        <Dialog open={openDelete}>
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleClickDelete();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                // deleteData(post.id);
                this.handelDeletePost(post.id);
              }}
              id="deleteCalled"
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
        <EditPost
          open={openEdit}
          onClose={this.handleClickOpenEdit}
          id={post.id}
          img={post.img}
          desc={post.desc}
          location={post.location}
          post={post}

          // updateData={updateData}
        />
      </>
    );
  }
}
//mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = (dispatch) => ({
//   deleteData: (id) => dispatch(deleteData(id)),
//   updateData: (postId,post) => dispatch(updateData(postId,post))
// });

// export default connect(null, mapDispatchToProps)(Post);
export default Post;
