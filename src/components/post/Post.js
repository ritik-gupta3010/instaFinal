import React from "react";
import "./Post.css";
import { deleteData ,updateData} from "../../redux/actions/postActions";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditPost from "../editPost/EditPost";


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleLike: "fa fa-heart-o postBottomIcon",
      styleSave: "fa fa-bookmark-o postBottomRight",
      openDelete: false,
      openEdit: false,
    };
  }
  handleClickOpenEdit = () => {
    this.setState({ openEdit: !this.state.openEdit });
  };
  handleClickOpenDelete = () => {
    this.setState({ openDelete: true });
  };
  handleClickDelete = () => {
    this.setState({ openDelete: false });
  };
  handleClickLike = () => {
    this.state.styleLike === "fa fa-heart-o postBottomIcon"
      ? this.setState({ styleLike: "fa fa-heart postBottomIconClick" })
      : this.setState({ styleLike: "fa fa-heart-o postBottomIcon" });
  };
  handleClickSave = () => {
    this.state.styleSave === "fa fa-bookmark-o postBottomRight"
      ? this.setState({ styleSave: "fa fa-bookmark postBottomRight" })
      : this.setState({ styleSave: "fa fa-bookmark-o postBottomRight" });
  };

  render() {
    const { post ,deleteData} = this.props;
    const { openDelete, openEdit, styleLike, styleSave } = this.state;
    
    console.log("in post", post);
    return (
      <>
        <div className="post">
          <div className="postTop">
            <div style={{display:"flex"}}>
              <img src={post.img} alt="postImage" className="postTopIcon" />
              <span className="postTopIconLocation">
                {post.location}
              </span>
            </div>
            <div className="postTopIconRight">

              <i
                className="singlePostIcon fa fa-pencil-square-o"
                aria-hidden="true"
                onClick={this.handleClickOpenEdit}
              ></i>
              <i
                className="singlePostIcon fa fa-trash"
                aria-hidden="true"
                onClick={() => {
                  this.handleClickOpenDelete();
                }}
              ></i>
            </div>
          </div>
          <img src={post.img} alt="postImage" className="postImage" />

          <div className="postBottom">
            <div>
              <i
                class={styleLike}
                aria-hidden="true"
                onClick={this.handleClickLike}
              ></i>
            </div>

            <div title={post.desc}>
              {post.desc.slice(0, 35)}
              {post.desc.length > 35 ? " ..." : ""}
            </div>
            <div>
              <i
                class={styleSave}
                aria-hidden="true"
                onClick={this.handleClickSave}
              ></i>
            </div>
          </div>
        </div>
        <Dialog
          open={openDelete}
          onClose={this.handleCloseDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
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
                deleteData(post.id);
              }}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
        <EditPost
          id={post.id}
          open={openEdit}
          onClose={this.handleClickOpenEdit}
          img={post.img}
          post={post}
          updateData={updateData}
        />
      </>
    );
  }
}
//mapDispatchToProps is used to dispatch the action
const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(deleteData(id)),
  updateData: (postId,post) => dispatch(updateData(postId,post))
});

export default connect(null, mapDispatchToProps)(Post);
