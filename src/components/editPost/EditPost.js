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
// import {updateData} from "../../redux/actions/postActions";
// import { connect } from "react-redux";
// import PropTypes from 'prop-types'

toast.configure();

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    const{id,img}=this.props;
    this.state = {
      idS: id,
      descS: "",
      locationS: "",
      img: img,
      update: false,
      
      openS: false, //for edit dialoge
      updatePostOpen: false,//to open dialoge when we click on to update the post
      open2: false,
      
    };
  }

  handleClick = () => { //passing data from props to state
    const {desc,img,location}=this.props;
    this.setState({
      descS: desc,
      img: img,
      locationS: location,
      update: true,
    });
    
  };


  handleClickUpdateYes = () => {
    const {idS,descS,img,locationS}=this.state;
    const post = {
      id: idS,
      desc:descS,
      img: img,
      location: locationS,
    };
    const {updateData}=this.props
    // console.log("update",this.props);

    updateData(idS, post);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);

  };

  handleCloseOpen = () => { //cancel dialoge and home
    const {img,desc,location,onClose}=this.props;
    const {descS,locationS}=this.setState;
    if (
      locationS === location &&
      this.state.img === img &&
      descS === desc
    ) {
      onClose(); //props from post
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

  handleCloseNo = () => {
    this.setState({
      updatePostOpen: false,
    });
  };

  handleCloseCancelYes = () => {
    const {onClose,location,desc,img}=this.props;
    this.setState({
      openS: false,
    });
    onClose(); //props from post
    this.setState({
      locationS: location,
      descS: desc,
      img: img,
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

    const{update,updatePostOpen,descS,locationS,openS}=this.state;
    const {desc,img,location}=this.props;
    const enable =
      (locationS === location &&
        descS === desc &&
        this.state.img === img) ||
        locationS === "" ||
        descS ==="" ||
        this.state.img === "";
    // console.log(enable);
    const {open}=this.props;
    return (
      <>

        <Dialog open={open} fullWidth maxWidth="lg" fullHeight>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="close">
                <CloseIcon onClick={this.handleCloseOpen} />
              </IconButton>
              <Typography sx={{ ml: 27, flex: 1 }} variant="h6" component="div" id="dialogeTop">
                Edit Post (Fields are editable,only write in the fields you want
                to update)
              </Typography>
              {enable === true ? (
                <Tooltip title="You have not done any changes">
                  <span>
                    <button
                      className="writeSubmit2"
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
                  id="editPostSubmit"
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
                    <span id="userName" style={{ marginTop: "22px", marginLeft: "5px" }}>
                      Ritik Gupta
                    </span>
                  </div>
                  {update ? (
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
                      <p id="requiredImg" style={{ marginTop: "-3px", marginLeft: "12px" }}>
                        {this.state.img === "" ? "*Required" : ""}
                      </p>
                    </>
                  ) : null}
                  
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
                      <p id="requiredDesc" style={{ marginTop: "-3px", marginLeft: "12px" }}>{descS === "" ? "*Required" : ""}</p>
                    </>
                  ) : (
                    <p className="writeInput2 writeText">{}</p>
                  )}
                  {update ?(
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
                    <p id="requiredLocation" style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {locationS === "" ? "*Required" : ""}
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
          open={openS}
        >
          <DialogTitle >
            {"Are you sure you don't want to edit this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, you will be redirected to the home page.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseCancelNO}>No</Button>
            <Button onClick={this.handleCloseCancelYes}>Yes</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={updatePostOpen}
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
            <Button onClick={this.handleCloseNo}>No</Button>
            <Button onClick={this.handleClickUpdateYes} id="supportyes">
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
