import React from "react";
import "./Write.css";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
// import Tooltip from "@mui/material/Tooltip";
import userIcon from "../../image/post.jpg";
import PropTypes from "prop-types";
// import {createData} from "../../redux/actions/postActions";
// import {connect} from "react-redux";

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      location: "",
      open: false,
      img: "",
    };
    
  }

  handleTextChange=(e)=> {
    
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClickCloseX = (e) => {
    console.log("close X");
    e.preventDefault();
    if (
      this.state.desc === "" &&
      this.state.location === "" &&
      this.state.img === ""
    ) {
      // this.setState({
      //   close: false,
      // });
      this.props.onClose();// to call openDialoge to false in navbar
    } else {
      this.setState({
        open: true,
      });
    }
  };

  handleCloseDis = () => {
    console.log("close disagee write");
    this.setState({
      open: false,
    });
  };

  handleCloseAgree = () => {
    console.log("agree close");
    this.setState({
      open: false,
    });
    this.props.onClose();// to call openDialoge to false in navbar
    this.setState({
      desc: "",
      location: "",
      img: "",
    });
  };

  handleClickPost = () => {
    console.log("post");

    const post = {
      desc: this.state.desc,
      location: this.state.location,
      img: this.state.img,
    };
    console.log(this.props);

    this.props.createDataProps(post);
    console.log("created");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  

  render() {
    const { openDiolog } = this.props;
    const { desc, location, img, open } = this.state;
    const enable = desc.length > 0 && img.length > 0 && location.length > 0;
    console.log(enable);
    return (
      <>
        <Dialog
          open={openDiolog}
          id="diolog"
          // Close={this.handleClose} //close disagree
          fullWidth
          maxWidth="md"
          fullHeight
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="close">
                <CloseIcon onClick={this.handleClickCloseX} id="btn" />
              </IconButton>
              <Typography sx={{ ml: 42, flex: 1 }} variant="h6" component="div">
                Create Post
              </Typography>
              {enable === false ? (
                <button
                  disabled={true}
                  title="Fill all the Fields"
                >
                  Post
                </button>
              ) : (
                <button onClick={this.handleClickPost}style={{ cursor: "pointer" }}>Post</button>
              )}
            </Toolbar>
          </AppBar>
          <div className="write">
            <form className="writeForm">
              <div className="writeFormGroup">
                <div className="writeFormGroupLeft">
                  <img src={img} className="img-Preview" id="preview" alt="" />
                </div>
                <div className="writeFormGroupRight">
                  <div className="writeFormGroupRightProfile">
                    <img
                      src={userIcon}
                      alt="ima"
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
                  <input
                    className="writeInput21"
                    placeholder="Enter the URL of your image"
                    type="text"
                    id="img"
                    name="img"
                    minlength="10"
                    onChange={this.handleTextChange}
                    required
                  />
                  <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {img === "" ? "*Required" : ""}
                  </p>
                  <textarea
                    className="writeInput2 writeText"
                    placeholder="Write a caption..."
                    type="text"
                    id="desc"
                    name="desc"
                    onChange={this.handleTextChange}
                    required
                  />
                  <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {desc === "" ? "*Required" : ""}
                  </p>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={this.handleTextChange}
                    placeholder="Add location"
                    className="location"
                    required
                  />
                  <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {location === "" ? "*Required" : ""}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Dialog>
        <Dialog open={open} >
          <DialogTitle>{"Do you want to cancel your create Post?"}</DialogTitle>
          <DialogContent>
            <DialogContentText >
              If you cancel your create post, your post will not be saved.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDis}>Disagree</Button>
            <Button onClick={this.handleCloseAgree}>Agree</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

Write.propTypes = {
  createData: PropTypes.func.isRequired,
};

Write.defaultProps = {
  createData: () => {},
};

// mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = dispatch => ({
//   createData: (data) => dispatch(createData(data))
// })

// export default connect(null,mapDispatchToProps)(Write);
export default Write;
