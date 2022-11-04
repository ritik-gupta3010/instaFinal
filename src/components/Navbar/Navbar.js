import React from "react";
import "./Navbar.css";
import Write from "../../Page/write/index";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialoge: false,
    };
  }
  openDialogeHandleClick = () => {
    this.setState({ openDialoge: !this.state.openDialoge });
  };
  render() {
    const { openDialoge } = this.state;

    return (
      <>
        <nav>
          <div className="top">
            <div className="topLeft">
              <a style={{ textDecoration: "none", color: "black" }} href="/">
                Instagram
                <i className="fa fa-instagram instagram" aria-hidden="true"></i>
              </a>
            </div>
            {/* search icon */}
            <div className="topRight">
              <ul className="topList">
                <li className="topListItem">
                  <input
                    type="text"
                    placeholder="Search"
                    className="topRightSearch"
                  />
                </li>
              </ul>
            </div>
            <div className="topCenter">
              <ul className="topList">
                <li className="topListItem">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="topListItem">
                  <i className="fa fa-comments" aria-hidden="true"></i>
                </li>
                <li className="topListItem">
                  <button
                    onClick={this.openDialogeHandleClick}
                    className="fa fa-plus buttom"
                  ></button>
                </li>
                <li className="topListItem">
                  <i className="fa fa-compass" aria-hidden="true"></i>
                </li>
                <li className="topListItem">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
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
