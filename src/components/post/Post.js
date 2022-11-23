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
import Badge from "@mui/material/Badge";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLike: "fa fa-heart-o postBottomIcon",
      styleSave: "fa fa-bookmark-o postBottomRight",
      openDelete: false,
      openEdit: false,
      descFull: "",
      // more: "...more",
      comment: false,
      commentReply: "",
      commentReplyObject: {},
      moreComment: false,
      moreDesc: false,
      styleLikeNew:"fa fa-heart postBottomIconClick"
    };
  }
  componentDidMount() {
    const { fetchLikedPost } = this.props;
    fetchLikedPost();
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
    const { saveLikePost, removeLikePost, post } = this.props;
    styleLike === "fa fa-heart-o postBottomIcon"
      ? this.setState({ styleLike: "fa fa-heart postBottomIconClick" })
      : this.setState({ styleLike: "fa fa-heart-o postBottomIcon" });
    let postLike = {
      id: post.id,
      img: post.img,
      desc: post.desc,
      location: post.location,
      comment: post.comments,
    };
    // console.log(postLike)
    // console.log("styleLike")
    if (styleLike !== "fa fa-heart postBottomIconClick") {
      // console.log("styleLike1")
      saveLikePost(postLike);
    } else {
      removeLikePost(postLike);
    }
  };
  handleClickLikeNew = () => {
    const { styleLikeNew } = this.state;
    const { saveLikePost, removeLikePost, post } = this.props;
    styleLikeNew === "fa fa-heart-o postBottomIcon"
      ? this.setState({ styleLikeNew: "fa fa-heart postBottomIconClick" })
      : this.setState({ styleLikeNew: "fa fa-heart-o postBottomIcon" });
    let postLike = {
      id: post.id,
      img: post.img,
      desc: post.desc,
      location: post.location,
      comment: post.comments,
    };
    
    // console.log(postLike)
    // console.log("styleLike")
    if (styleLikeNew !== "fa fa-heart postBottomIconClick") {
      // console.log("styleLike1")
      saveLikePost(postLike);
    } else {
      removeLikePost(postLike);
    }
  };
  handleClickSave = () => {
    const { styleSave } = this.state;
    const { savePost, removePost, post } = this.props;
    styleSave === "fa fa-bookmark-o postBottomRight"
      ? this.setState({ styleSave: "fa fa-bookmark postBottomRight" })
      : this.setState({ styleSave: "fa fa-bookmark-o postBottomRight" });

    let postLike = {
      id: post.id,
      img: post.img,
      desc: post.desc,
      location: post.location,
      comment: post.comments,
    };
    if (styleSave !== "fa fa-bookmark postBottomRight") {
      // console.log("styleLike1")
      savePost(postLike);
    } else {
      removePost(postLike);
    }
  };
  handelDeletePost = (id) => {
    const { deleteData,fetchData ,fetchLikedPost} = this.props;
    deleteData(id);
    setTimeout(() => {
      fetchData();
      
    }, 2000);
    setTimeout(() => {
      
      fetchLikedPost();
    }, 2000);
    this.setState({ openDelete: false });
  };
  handleRemoveLike=(post)=>{
    const {removeLikePost}=this.props;
    removeLikePost(post)
  }
  handleClickDescFull = () => {
    // const { post } = this.props;
    const { moreDesc } = this.state;
    // this.setState({ descFull: post.desc, more: "" });
    // post.desc=""
    this.setState({ moreDesc: !moreDesc });
  };
  handleClickComment = () => {
    const { comment } = this.state;
    this.setState({ comment: !comment });
  };
  handleClickCommentEnter = () => {
    const { post, commentPost ,fetchData,fetchLikedPost} = this.props;
    const { commentReplyObject } = this.state;
    const updatedPostComment = {
      img: post.img,
      location: post.location,
      desc: post.desc,
      comments: Object.assign(post.comments, commentReplyObject),
    };
    commentPost(post.id, updatedPostComment);
    this.setState({commentReply:""})
    setTimeout(() => {
      fetchData();
      
    }, 2000);
    setTimeout(() => {
      
      fetchLikedPost();
    }, 2000);
  };
  handleClickCommentReply = (e) => {
    e.preventDefault();
    const { commentReply } = this.state;
    // console.log("e.target.value",e.target.value);
    this.setState({ [e.target.name]: e.target.value });

    let obj = { [commentReply]: commentReply };
    // console.log("obj",obj);
    this.setState({ commentReplyObject: obj });
    // console.log("commentReplyObject",this.state.commentReplyObject);
    // console.log("------------------------------")
    // Object.assign({commentReply},this.state.commentReplyObject)
  };
  handleClickCommentReplyFull = () => {
    const { moreComment } = this.state;
    this.setState({ moreComment: !moreComment });
  };

  render() {
    const { post,  postReduxStateLikedPost } = this.props;
    const { comments } = post;
    // console.log("props comments", comments);
    // console.log("props",Object.values(comments).length);
    // console.log("likePost",likePost)
    // console.log(likePost && Object.values(likePost).length)
    // console.log(typeof postReduxStateLikedPost)
    console.log("postReduxStateLikedPost", postReduxStateLikedPost);
    let flagStyleLike = false;
    Object.values(postReduxStateLikedPost) &&
      Object.values(postReduxStateLikedPost).forEach((like) => {
        if (post.id === like.id) {
          flagStyleLike = true;
        }
      });
    // console.log(flagStyleLike);
    
    const {
      openDelete,
      openEdit,
      styleLike,
      styleSave,
      comment,
      commentReply,
      moreComment,
      moreDesc,
    } = this.state;
    // console.log("comment", commentReply);
    // console.log("in post", post);
    // console.log("post.comments",post.comments)
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
              {flagStyleLike ? (
                <i
                  class={
                    this.state.styleLikeNew
                    // styleLike

                    // flagStyleLike ? "fa fa-heart postBottomIconClick" : styleLike
                  }
                  aria-hidden="true"
                  onClick={() => {
                    this.handleClickLikeNew();
                  }}
                  id="like"
                ></i>
              ) : (
                <i
                  class={
                    styleLike

                    // flagStyleLike ? "fa fa-heart postBottomIconClick" : styleLike
                  }
                  aria-hidden="true"
                  onClick={() => {
                    this.handleClickLike();
                  }}
                  id="like"
                ></i>
              )}
            </div>

            <div>
              <Badge
                badgeContent={Object.values(comments).length}
                color="secondary"
                sx={{}}
              >
              <i
                class="fa fa-comment-o postBottomComment"
                color="action"
                style={{ position: "static" }}
                title="Open Comment"
                aria-hidden="true"
                onClick={() => {
                  this.handleClickComment();
                }}
              ></i>
              </Badge>
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
              {/* {post.desc && post.desc.slice(0, 49)}
              {post.desc && post.desc.length > 49 ? (
                <span
                style={{fontWeight:"500" ,marginLeft:"0px"}}
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
                this.state.descFull.slice(49, this.state.descFull.length)} */}

              {post.desc && post.desc.slice(0, 55)}
              {post.desc && post.desc.length > 55 ? (
                <span
                  style={{ fontWeight: "500" }}
                  onClick={() => {
                    this.handleClickDescFull();
                  }}
                >
                  {moreDesc ? null : (
                    <h4 style={{ margin: "0px 0px 0px 86%" }}>...more</h4>
                  )}
                </span>
              ) : (
                ""
              )}
              {moreDesc
                ? post.desc && post.desc.slice(55, post.desc.length)
                : ""}
              {moreDesc && post.desc.length > 55 ? (
                <span
                  onClick={() => {
                    this.handleClickDescFull();
                  }}
                >
                  <h4 style={{ margin: "0px 0px 0px 81%" }}>...See Less</h4>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="postBottomCommentCount"
            onClick={() => {
              this.handleClickComment();
            }}
          >
            {Object.values(comments) && Object.values(comments).length > 0 ? (
              <>view all {Object.values(comments).length} comments</>
            ) : (
              "add a comment"
            )}
          </div>
          <div className="postBottomCommentReply">
            {Object.values(comments).length > 0 && comment ? (
              <>
                <h3 style={{ color: "rgb(50, 55, 101)" }}>comments...</h3>
                {Object.values(comments).length > 0 &&
                  Object.values(comments).map((reply) => {
                    return (
                      <div className="postBottomCommentReplyUlLi">
                        <Avatar
                          sx={{
                            bgcolor: "rgb(50, 55, 101)",
                            marginRight: "5px",
                            marginBottom: "2px",
                            position: "static",
                          }}
                        />
                        {/* <div className="reply">{reply}</div> */}
                        <div title={reply} className="reply">
                          {reply && reply.slice(0, 88)}
                          {reply && reply.length > 88 ? (
                            <span
                              style={{ fontWeight: "500" }}
                              onClick={() => {
                                this.handleClickCommentReplyFull();
                              }}
                            >
                              {moreComment ? null : (
                                <h4 style={{ margin: "0px 0px 0px 84%" }}>
                                  ...more
                                </h4>
                              )}
                            </span>
                          ) : (
                            ""
                          )}
                          {moreComment
                            ? reply && reply.slice(88, reply.length)
                            : ""}
                          {moreComment && reply.length > 88 ? (
                            <span
                              onClick={() => {
                                this.handleClickCommentReplyFull();
                              }}
                            >
                              <h4 style={{ margin: "0px 0px 0px 77%" }}>
                                ...See Less
                              </h4>
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      // <ul className="postBottomCommentReplyUl">
                      //   <li className="postBottomCommentReplyUlLi">{reply}</li>
                      // </ul>
                      // <span>{reply},&nbsp;</span>
                    );
                  })}
              </>
            ) : (
              ""
            )}
          </div>
          {/* {comment ?(
            Object.values(comments).length>0 && Object.values(comments).forEach(comment=>{
              <div style={{}}>
                {comment}
              </div>
            })
          ):"No Comments"} */}
          {comment ? (
            <div className="comment">
              <TextField
                type="text"
                id="input-with-icon-textfield"
                sx={{
                  width: "94%",
                  marginLeft: "3%",
                  border: "none",
                  borderBottom: "0px solid rgb(50, 55, 101)",
                }}
                label="Comment..."
                name="commentReply"
                value={commentReply}
                onChange={this.handleClickCommentReply}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendIcon
                        onClick={() => {
                          this.handleClickCommentEnter();
                        }}
                        sx={{ cursor: "pointer", color: "rgb(50, 55, 101)" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "rgb(50, 55, 101)" },
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
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
              onClick={() => {
                this.handleClickDelete();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
              onClick={() => {
                // deleteData(post.id);
                this.handelDeletePost(post.id);
                this.handleRemoveLike(post);
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
          // likePostPP={styleLike}
          // updateData={updateData}
        />
      </>
    );
  }
}
Post.propTypes = {
  postReduxStateLikedPost: PropTypes.func.isRequired,
  fetchLikedPost: PropTypes.func.isRequired,
};
Post.defaultProps = {
  //
  postReduxStateLikedPost: [],
  fetchLikedPost: () => {},
};
//mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = (dispatch) => ({
//   deleteData: (id) => dispatch(deleteData(id)),
//   updateData: (postId,post) => dispatch(updateData(postId,post))
// });

// export default connect(null, mapDispatchToProps)(Post);
export default Post;
