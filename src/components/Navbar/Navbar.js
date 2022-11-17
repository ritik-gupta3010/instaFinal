import React from "react";
import "./Navbar.css";
// import Button from "@mui/material/Button";
import Write from "../../Page/write/index";
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialoge: false,
    };
  }
  openDialogeHandleClick = () => {
    const {openDialoge}=this.state;
    this.setState({ openDialoge: !openDialoge });
  };
  render() {
    const { openDialoge } = this.state;

    return (
      <>
        <nav>
          <div className="top">
            <div className="topLeft">
                <span>Instagram</span>
                <span className="instagram"><i className="fa fa-instagram " aria-hidden="true"></i></span>
            </div>
            {/* search icon */}
            {/* <div className="topRight">
              <ul className="topList">
                <li className="topListItem">
                  <input
                    type="text"
                    placeholder="Search"
                    className="topRightSearch"
                  />
                </li>
              </ul>
            </div> */}
            <div className="topCenter">
              <ul className="topList">
                <li className="topListItem">
                  {/* <a
                    style={{ textDecoration: "none",  color: "white"}}
                    href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a> */}
                  <HomeIcon/>
                </li>
                <li className="topListItem">
                  
                    <AddIcon sx={{color:"white"}}onClick={this.openDialogeHandleClick}/>
                  
                </li>
                <li className="topListItem">
                  {/* <i className="fa fa-compass" aria-hidden="true"></i> */}
                  <ExploreIcon/>
                </li>
                <li className="topListItem">
                  {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
                  <FavoriteBorderIcon/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Write openDiolog={openDialoge} onClose={this.openDialogeHandleClick} />
      </>
    );
  }
}
