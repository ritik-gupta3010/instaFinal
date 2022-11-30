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

import { toast } from "react-toastify";

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descS: "",
      locationS: "",
      openD: false,
      img: "",
      imgError: "",
    };
  }
  // componentDidMount(){
  //   const {fetchData}=this.props;
  //   fetchData();
  // }
  handleTextChange = (e) => {
    // if(e.target.name==="img")
    // {
    //   console.log("aaaa");
    //   console.log(e.target.value)

    //   if(e.target.value!=="" && e.target.value.substr(0,8)!==("https://"))
    //   {
    //     this.setState({imgError:"img url should be https",[e.target.name]: e.target.value});

    //     return false;
    //   }
    //   else
    //   {
    //     if(e.target.value==="")
    //     {
    //       this.setState({imgError:""})
    //     }
    //   }
    // }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClickCloseX = () => {
    // console.log("close X");
    // e.preventDefault();
    const { onClose } = this.props;
    const { descS, locationS, img } = this.state;
    if (descS === "" && locationS === "" && img === "") {
      // this.setState({
      //   close: false,
      // });
      onClose(); // to call openDialoge to false in navbar
    } else {
      this.setState({
        openD: true,
      });
    }
  };

  handleCloseDis = () => {
    // console.log("close disagee write");
    this.setState({
      openD: false,
    });
  };

  handleCloseAgree = () => {
    // console.log("agree close");
    const { onClose } = this.props;
    this.setState({
      openD: false,
    });
    onClose(); // to call openDialoge to false in navbar
    this.setState({
      descS: "",
      locationS: "",
      img: "",
    });
  };

  handleClickPost = (e) => {
    e.preventDefault();
    // console.log("post");
    const { descS, locationS, img } = this.state;
    const { onClose } = this.props;
    if (!img.match(/^https:\/\//)) {
      toast.error("image url should be https url");
      // toast.error("image url should be https url",{position:toast.POSITION.BOTTOM_RIGHT})
      return false;
    }
    const post = {
      desc: descS,
      location: locationS,
      img: img,
      // comments:{},
      like: false,
      
    };
    const { createDataProps, fetchData } = this.props;
    createDataProps(post);

    // console.log(this.props);

    setTimeout(() => {
      fetchData();
    }, 2000);
    setTimeout(() => {
      onClose();
      
    }, 2000);
    setTimeout(() => {
      this.setState({
        descS: "",
        locationS: "",
        img: "",
      });
    }, 2000);
    // console.log("created");
    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 2000);
  };

  render() {
    const { openDiolog } = this.props;
    // console.log("this.props.openDiolog",openDiolog);
    const { descS, locationS, img, openD } = this.state;
    // const enable = descS.length > 0 && img.length > 0 && locationS.length > 0;
    // console.log(img)
    const enable =
      descS.length > 0 &&
      img.length > 0 &&
      img.substr(0, 8) === "https://" &&
      locationS.length > 0;
    // console.log("enable",enable);
    return (
      <>
        <Dialog
          open={openDiolog}
          id="diolog"
          // Close={this.handleClose} //close disagree
          fullWidth
          maxWidth="md"
          fullHeight
          sx={{ zIndex: "5000" }}
        >
          <AppBar sx={{ position: "relative", bgcolor: " rgb(50, 55, 101)" }}>
            <Toolbar>
              <Typography sx={{ flex: 1 }} variant="h6" component="div">
                Create Post
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleClickCloseX}
                id="btn"
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
                      src={img}
                      className="img-Preview"
                      id="preview"
                      alt=""
                    />
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
                      <span
                        id="userName"
                        style={{ marginTop: "22px", marginLeft: "5px" }}
                      >
                        Ritik Gupta
                      </span>
                    </div>
                    <input
                      className="writeInput21"
                      placeholder="Enter the URL of your image"
                      type="text"
                      id="img"
                      name="img"
                      onChange={this.handleTextChange}
                      required
                    />
                    {/* <p style={{ marginTop: "-3px", marginLeft: "12px" }}>
                    {img === "" ? "*Required" : this.state.imgError}
                  </p> */}
                    <p
                      style={{
                        marginTop: "-3px",
                        marginLeft: "12px",
                        color: "red",
                      }}
                    >
                      {img.substr(0, 8) !== "https://"
                        ? "*Provide https image url "
                        : ""}
                    </p>
                    <textarea
                      className="writeInput2 writeText"
                      placeholder="Write a caption..."
                      type="text"
                      id="desc"
                      name="descS"
                      onChange={this.handleTextChange}
                      required
                    />
                    <p
                      style={{
                        marginTop: "-3px",
                        marginLeft: "12px",
                        color: "red",
                      }}
                    >
                      {descS === "" ? "*Required" : ""}
                    </p>
                    <input
                      type="text"
                      id="location"
                      name="locationS"
                      onChange={this.handleTextChange}
                      placeholder="Add location"
                      className="location"
                      required
                    />
                    <p
                      style={{
                        marginTop: "-3px",
                        marginLeft: "12px",
                        color: "red",
                      }}
                    >
                      {locationS === "" ? "*Required" : ""}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </DialogContent>
          <DialogActions sx={{ borderTop: "1px solid rgb(224,224,224)" }}>
            {enable === false ? (
              <div style={{ position: "relative", marginLeft: "43%" }}>
                <Button
                  disabled={true}
                  title="Fill all the Fields"
                  className="postSubmit"
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
              </div>
            ) : (
              <div style={{ position: "relative", marginLeft: "43%" }}>
                <Button
                  variant="contained"
                  onClick={this.handleClickPost}
                  className="postSubmit"
                  sx={{
                    bgcolor: "rgb(50, 55, 101)",
                    ":hover": {
                      bgcolor: "rgb(50, 55, 101)",
                    },
                  }}
                >
                  Post
                </Button>
              </div>
            )}
          </DialogActions>
        </Dialog>
        <Dialog open={openD} sx={{ zIndex: "5000" }}>
          <DialogTitle>{"Do you want to cancel your create Post?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you cancel your create post, your post will not be saved.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCloseDis}
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              Disagree
            </Button>
            <Button
              onClick={this.handleCloseAgree}
              variant="contained"
              sx={{
                bgcolor: "rgb(50, 55, 101)",
                ":hover": {
                  bgcolor: "rgb(50, 55, 101)",
                },
              }}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

Write.propTypes = {
  createDataProps: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Write.defaultProps = {
  createDataProps: () => {},
  onClose: () => {},
  fetchData: () => {},
};

// mapDispatchToProps is used to dispatch the action
// const mapDispatchToProps = dispatch => ({
//   createData: (data) => dispatch(createData(data))
// })

// export default connect(null,mapDispatchToProps)(Write);
export default Write;
