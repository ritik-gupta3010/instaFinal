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

import userIcon from "../../image/post.jpg";
import PropTypes from "prop-types";
// import {updateData} from "../../redux/actions/postActions";
// import { connect } from "react-redux";
// import PropTypes from 'prop-types'

toast.configure();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      idS: id,
      descS: "",
      locationS: "",
      imgS: "",
      update: false,
      openS: false, //for edit dialoge
      updatePostOpen: false, //to open dialoge when we click on to update the post
      open2: false,
    };
  }

  handleClick = () => {
    //passing data from props to state
    const { desc, img, location } = this.props;
    this.setState({
      descS: desc,
      imgS: img,
      locationS: location,
      update: true,
    });
  };

  handleClickUpdateYes = () => {
    const { idS, descS, imgS, locationS } = this.state;
    const { post } = this.props;
    // if(!imgS.match(/^https:\/\//))
    // {
    //   toast.error("image url should be https url")
    //   // toast.error("image url should be https url",{position:toast.POSITION.BOTTOM_RIGHT})
    //   return false;
    // }
    const Editpost = {
      id: idS,
      desc: descS,
      img: imgS,
      location: locationS,
      like:post.like
      // comments: post && post.comments,
    };
    // console.log(post.comments);
    const { updateData, fetchData, onClose,fetchLikedPost} = this.props;
    // console.log("update",this.props);
    
    updateData(idS, Editpost);
    setTimeout(()=>{
      fetchData();
    },2000)
    // setTimeout(() => {
      
    //   fetchLikedPost();
    // }, 2000);
    setTimeout(() => {
      onClose();
    }, 2000);
    this.setState({
      updatePostOpen: false,
    });
    // setTimeout(()=>{
    //   this.setState({
    //     updatePostOpen: false
    //   });
    // },1000)
    // setTimeout(()=>{
    //   this.setState({
    //     descS: "",
    //     locationS: "",
    //     img: "",
    //   });
    // },5000)
    // setTimeout(() => {
    //   window.location.href = "";
    // }, 1000);
  };

  handleCloseOpen = () => {
    //cancel dialoge and home
    const { img, desc, location, onClose } = this.props;
    const { descS, locationS, imgS } = this.state;

    if (locationS === location && imgS === img && descS === desc) {
      onClose(); //props from post
      console.log("direct click");
    } else {
      this.setState({
        openS: true,
      });
    }
  };

  handleCloseCancelNO = () => {
    this.setState({
      openS: false,
    });
  };

  handleClickUpdateNo = () => {
    this.setState({
      updatePostOpen: false,
    });
  };

  handleCloseCancelYes = () => {
    const { onClose, location, desc, img } = this.props;
    this.setState({
      openS: false,
    });
    onClose(); //props from post
    this.setState({
      locationS: location,
      descS: desc,
      imgS: img,
    });
  };
  handleUpdateOpen = () => {
    this.setState({
      updatePostOpen: true,
    });
  };

  componentDidMount() {
    this.handleClick();
  }
  render() {
    const { update, updatePostOpen, descS, locationS, openS, imgS } =
      this.state;
    const { desc, img, location } = this.props;
    const enable =
      (locationS === location && descS === desc && imgS === img) ||
      locationS === "" ||
      descS === "" ||
      imgS === "";
    // console.log(enable);
    const { open } = this.props;

    // console.log("in editpost image substr",imgS.substr(0,8)!==("https://"));

    return (
      <>
        <Dialog open={open} fullWidth maxWidth="md" fullHeight sx={{zIndex:"6000"}}>
          <AppBar sx={{ position: "relative", bgcolor: " rgb(50, 55, 101)" }}>
            <Toolbar>
              <Typography
                sx={{ flex: 1 }}
                variant="h6"
                component="div"
                id="dialogeTop"
              >
                Edit Post
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleCloseOpen}
                sx={{ margin: "-25px" }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent sx={{ padding: "0px", marginTop: "5px" }}>
            <div className="write">
              <form className="writeForm">
                <div className="writeFormGroup">
                  <div className="writeFormGroupLeft">
                    <img
                      src={imgS}
                      className="img-Preview1"
                      id="preview"
                      alt=""
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
                      <span
                        id="userName"
                        style={{ marginTop: "22px", marginLeft: "5px" }}
                      >
                        Ritik Gupta
                      </span>
                    </div>
                    {update ? (
                      <>
                        <input
                          type="text"
                          id="img"
                          name="imgS"
                          className="writeInput21"
                          placeholder="If you want to change the image of the blog then paste the new link here"
                          value={imgS}
                          onChange={(e) =>
                            this.setState({ [e.target.name]: e.target.value })
                          }
                        />
                        <p
                          id="requiredImg"
                          style={{
                            marginTop: "-3px",
                            marginLeft: "12px",
                            color: "red",
                          }}
                        >
                          {imgS === "" ||
                          (imgS && imgS.substr(0, 8) !== "https://")
                            ? "*Provide https image url"
                            : ""}
                        </p>
                      </>
                    ) : (
                      <p className="writeInput21">{}</p>
                    )}

                    {update ? (
                      <>
                        <textarea
                          className="writeInput2 writeText"
                          name="descS"
                          id="desc"
                          value={descS}
                          onChange={(e) =>
                            this.setState({ [e.target.name]: e.target.value })
                          }
                        ></textarea>
                        <p
                          id="requiredDesc"
                          style={{
                            marginTop: "-3px",
                            marginLeft: "12px",
                            color: "red",
                          }}
                        >
                          {descS === "" ? "*Required" : ""}
                        </p>
                      </>
                    ) : (
                      <p className="writeInput2 writeText">{}</p>
                    )}
                    {update ? (
                      <>
                        <input
                          className="location"
                          name="locationS"
                          id="location"
                          value={locationS}
                          onChange={(e) =>
                            this.setState({ [e.target.name]: e.target.value })
                          }
                        ></input>
                        <p
                          id="requiredLocation"
                          style={{
                            marginTop: "-3px",
                            marginLeft: "12px",
                            color: "red",
                          }}
                        >
                          {locationS === "" ? "*Required" : ""}
                        </p>
                      </>
                    ) : (
                      <p className="location">{}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </DialogContent>
          <DialogActions sx={{ borderTop: "1px solid rgb(224,224,224)" }}>
            {enable === true || imgS.substr(0, 8) !== "https://" ? (
              <span>
                <Button
                  variant="contained"
                  className="writeSubmit2"
                  disabled={true}
                  title="You have not done any changes"
                  sx={{
                    bgcolor: "rgb(50, 55, 101)",
                    ":hover": {
                      bgcolor: "rgb(50, 55, 101)",
                    },
                  }}
                >
                  Post
                </Button>
              </span>
            ) : (
              <Button
                className="writeSubmit2"
                onClick={this.handleUpdateOpen}
                id="editPostSubmit"
                variant="contained"
                sx={{
                  bgcolor: "rgb(50, 55, 101)",
                  ":hover": {
                    bgcolor: "rgb(50, 55, 101)",
                  },
                }}
              >
                Post
              </Button>
            )}
          </DialogActions>
        </Dialog>
        <Dialog open={openS} sx={{zIndex:"6000"}}>
          <DialogTitle>
            {"Are you sure you don't want to edit this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, you will be redirected to the home page.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCloseCancelNO}
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              No
            </Button>
            <Button
              onClick={this.handleCloseCancelYes}
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={updatePostOpen} sx={{zIndex:"6000"}}>
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
            <Button
              onClick={this.handleClickUpdateNo}
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              No
            </Button>
            <Button
              onClick={this.handleClickUpdateYes}
              id="supportyes"
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
EditPost.propTypes = {
  updateData: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

EditPost.defaultProps = {
  updateData: () => {},
  onClose: () => {},
};
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
