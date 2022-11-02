import React from "react";
import "./EditPost.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "@mui/material";
import userIcon from "../../image/post.jpg";
import {updateData} from "../../redux/actions/postActions";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

toast.configure();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      desc: "",
      update: false,
      isHidden: true,
      open: false,
      open1: false,
      open2: false,
      img: this.props.post.img,
      location: "",
    };
  }

  handleClick = () => {
    this.setState({
      desc: this.props.post.desc,
      img: this.props.post.img,
      location: this.props.post.location,
      update: true,
    });
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };

  handleClick1 = () => {
    this.setState({
      open2: true,
    });
  };

  handleClickUpdate = () => {
    const post = {
      id: this.state.id,
      desc: this.state.desc,
      img: this.state.img,
      location: this.state.location,
    };
    console.log("update",this.props);

    this.props.updateData(this.state.id, post);
    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 1000);
  };

  handleCloseOpen = () => {
    if (
      this.state.location === this.props.post.location &&
      this.state.img === this.props.post.img &&
      this.state.desc === this.props.post.desc
    ) {
      this.props.onClose();
    } else {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClose2 = () => {
    this.setState({
      open1: false,
    });
  };

  handleClose1 = () => {
    this.setState({
      open: false,
    });
    this.props.onClose();
    this.setState({
      location: this.props.post.location,
      desc: this.props.post.desc,
      img: this.props.post.img,
    });
  };
  handleUpdateOpen = () => {
    this.setState({
      open1: true,
    });
  };

  handleError = () => {
    toast.info(
      "you have not done any changes or you have not fullfilled the conditions of the given text fields",
      { position: toast.POSITION.TOP_CENTER }
    );
  };

  componentDidMount() {
    this.handleClick();
  }
  render() {
    const {  desc, location } = this.state;
    // const {post}=this.props;
    const enable =
      (location === this.props.post.location &&
        desc === this.props.post.desc &&
        this.state.img === this.props.post.img) ||
      this.state.location === "" ||
      this.state.desc ==="" ||
      this.state.img === "";
    console.log(enable);
    return (
      <>
        <Dialog open={this.props.open} fullWidth maxWidth="lg" fullHeight>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="close">
                <CloseIcon onClick={this.handleCloseOpen} />
              </IconButton>
              <Typography sx={{ ml: 27, flex: 1 }} variant="h6" component="div">
                Edit Post (Fields are editable,only write in the fields you want
                to update)
              </Typography>
              {enable === true ? (
                <Tooltip title="You have not done any changes">
                  <span>
                    <button
                      className="writeSubmit2"
                      onClick={this.handleUpdateOpen}
                      disabled={true}
                    >
                      Post
                    </button>
                  </span>
                </Tooltip>
              ) : (
                <button
                  className="writeSubmit2"
                  onClick={this.handleUpdateOpen}
                >
                  Post
                </button>
              )}
            </Toolbar>
          </AppBar>
          

          <div className="write">
            <form className="writeForm">
              <div className="writeFormGroup">
                <div className="writeFormGroupLeft">
                  <img
                    src={this.state.img}
                    className="img-Preview"
                    id="preview"
                    alt="img-pre"
                  />
                </div>
                <div className="writeFormGroupRight">
                  <div className="writeFormGroupRightProfile">
                    <img
                      src={userIcon}
                      alt="userProfile"
                      style={{
                        height: "35px",
                        width: "35px",
                        borderRadius: "50%",
                        marginTop: "15px",
                        marginLeft: "15px",
                      }}
                    />
                    <span style={{ marginTop: "22px", marginLeft: "5px" }}>
                      Ritik Gupta
                    </span>
                  </div>
                  {this.state.update ? (
                    <>
                      <input
                        type="text"
                        id="img"
                        name="img"
                        className="writeInput21"
                        placeholder="If you want to change the image of the blog then paste the new link here"
                        value={this.state.img}
                        onChange={(e) =>
                          this.setState({ [e.target.name]: e.target.value })
                        }
                      />
                      <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                        {this.state.img === "" ? "*Required" : ""}
                      </p>
                    </>
                  ) : null}
                  
                  {this.state.update ? (
                    <>
                      <textarea
                        className="writeInput2 writeText"
                        name="desc"
                        id="desc"
                        value={this.state.desc}
                        onChange={(e) =>
                          this.setState({ [e.target.name]: e.target.value })
                        }
                      ></textarea>
                      <p style={{ marginTop: "-3px", marginLeft: "12px" }}>{this.state.desc === "" ? "*Required" : ""}</p>
                    </>
                  ) : (
                    <p className="writeInput2 writeText">{}</p>
                  )}
                  {this.state.update ?(
                    <>
                    <input
                      className="location"
                      name="location"
                      id="location"
                      value={this.state.location}
                      onChange={(e) =>
                        this.setState({ [e.target.name]: e.target.value })
                      }
                    ></input>
                    <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {this.state.location === "" ? "*Required" : ""}
                  </p>
                  </>
                ) : (
                  <p className="location">{location}</p>
                )}
                </div>
              </div>
            </form>
          </div>
        </Dialog>
        <Dialog
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you don't want to edit this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, you will be redirected to the home page.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>No</Button>
            <Button onClick={this.handleClose1}>Yes</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to update your post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, your previous data will be replaced by the new
              data.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2}>No</Button>
            <Button onClick={this.handleClickUpdate} id="supportyes">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

//mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = (dispatch) => ({
//     updateData: (postId,post) => dispatch(updateData(postId,post))
// });
//mapStatetoProps is used to get the redux state variable which we are used in our react component
// const mapStateToProps = (state) => ({
//     Postdata: state.singleData
// })
// export default connect(mapStateToProps,mapDispatchToProps)(EditPost);

// EditPost.propTypes = {
//   editData: PropTypes.func.isRequired
// }

// EditPost.defaultProps = {
//   editData: () => { }
// }
export default EditPost;
