import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import "./LikePost.css";
import PropTypes from "prop-types";

export default class LikePostOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: false,
      moreDesc: false,
    };
  }
  componentDidMount() {
    const { fetchLikedPost } = this.props;
    fetchLikedPost();
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
  render() {
    const { post } = this.props;
    const { moreDesc } = this.state;
    return (
      <>
        <div className="postL">
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
            {/* <div className="postTopIconRight">
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
                    </div> */}
          </div>
          <img src={post.img} alt="postImage" className="postImage" />

          <div className="postBottom">
                    <div>
                      <i
                        className={"fa fa-heart postBottomIconClick"}
                        aria-hidden="true"
                        // onClick={() => {
                        //   this.handleClickLike();
                        // }}
                        id="like"
                      ></i>
                    </div>

                    {/* <div>
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
                    </div> */}

                    <div>
                      <i
                        className="fa fa-bookmark-o postBottomRight"
                        aria-hidden="true"
                        // onClick={() => {
                        //   this.handleClickSave();
                        // }}
                        id="save"
                      ></i>
                    </div>
                  </div>
          <div className="postBottomDesc">
            <div title={post.desc} id="desc" className="desc">
              {post.desc && post.desc.slice(0, 55)}
              {post.desc && post.desc.length > 55 ? (
                <span
                  style={{ fontWeight: "500" }}
                    onClick={() => {
                      this.handleClickDescFull();
                    }}
                >
                  {moreDesc ? null : (
                            <h4 style={{ margin: "0px 0px 0px 86%" }}>
                              ...more
                            </h4>
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
                          <h4 style={{ margin: "0px 0px 0px 81%" }}>
                            ...See Less
                          </h4>
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
            {Object.values(post.comment) &&
            Object.values(post.comment).length > 0 ? (
              <>view all {Object.values(post.comment).length} comments</>
            ) : (
              ""
            )}
          </div>
          <div className="postBottomCommentReply">
            {Object.values(post.comment).length > 0 && this.state.comment ? (
              <>
                <h3 style={{ color: "rgb(50, 55, 101)" }}>comments...</h3>
                {Object.values(post.comment).length > 0 &&
                  Object.values(post.comment).map((reply) => {
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
                        <div title={reply} className="reply">
                          {reply && reply.slice(0, 88)}
                          {reply && reply.length > 88 ? (
                            <span
                              style={{ fontWeight: "500" }}
                              onClick={() => {
                                this.handleClickCommentReplyFull();
                              }}
                            >
                              {/* {moreComment ? null : (
                                        <h4
                                          style={{ margin: "0px 0px 0px 84%" }}
                                        >
                                          ...more
                                        </h4>
                                      )} */}
                            </span>
                          ) : (
                            ""
                          )}
                          {/* {moreComment
                                    ? reply && reply.slice(88, reply.length)
                                    : ""} */}
                          {/* {moreComment && reply.length > 88 ? (
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
                                  )} */}
                        </div>
                      </div>
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
          {/* {comment ? (
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
                                sx={{
                                  cursor: "pointer",
                                  color: "rgb(50, 55, 101)",
                                }}
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
                  )} */}
        </div>
      </>
    );
  }
}
LikePostOne.propTypes = {
    postReduxStateLikedPost: PropTypes.object.isRequired,
    fetchLikedPost: PropTypes.func.isRequired,
  };
  LikePostOne.defaultProps = {
    postReduxStateLikedPost: {},
    fetchLikedPost: () => {},
  };