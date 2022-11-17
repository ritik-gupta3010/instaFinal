import React from "react";
import "./Following.css";
import Avatar from "@mui/material/Avatar";

export default class Follwing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: "Follow",
    };
  }
  changeFollow = (e) => {
    const { follow } = this.state;
    e.preventDefault();
    follow === "Follow"
      ? this.setState({ follow: "Following" })
      : this.setState({ follow: "Follow" });
  };
  render() {
    const { followUser } = this.props;
    const { follow } = this.state;
    return (
      <>
        <div className="row">
          {/* <i className="fa fa-user-circle-o user-icon" aria-hidden="true" > </i>
          <span style={{ marginTop: "8px" ,color: "blue"}}>{followUser}</span> */}
          <div style={{ display: "flex" }}>
            <Avatar
              src="/static/images/avatar/1.jpg"
              sx={{ margin: "5px", position:"static",bgcolor:"rgb(50, 55, 101)"}}
            ></Avatar>
            <span style={{ marginTop: "8px" }}>{followUser}</span>
          </div>
          <span className="sideRight" onClick={this.changeFollow}>
            {follow}
          </span>
        </div>
      </>
    );
  }
}
