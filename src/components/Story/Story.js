import React from "react";
import "./Story.css";
import Avatar from "@mui/material/Avatar";

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="story">
          <span className="avatar">
           
            <Avatar
              src="/static/images/avatar/1.jpg"
              className="logo"
              sx={{
                position:"static",
                marginLeft:"1px",
                marginTop:"1px",
                bgcolor: "rgb(50, 55, 101)",
                
              }}
            ></Avatar>
          </span>
          <span className="avatar">
            <Avatar
            className="logo"
              src="/static/images/avatar/1.jpg"
              sx={{
                position:"static",
                marginLeft:"1px",
                marginTop:"1px",
                bgcolor: "rgb(50, 55, 101)",
              }}
            ></Avatar>
          </span>
          <span className="avatar">
            <Avatar
              src="/static/images/avatar/1.jpg"
              className="logo"
              sx={{
                position:"static",
                marginLeft:"1px",
                marginTop:"1px",
                bgcolor: "rgb(50, 55, 101)",
              }}
            ></Avatar>
          </span>
          <span className="avatar">
            <Avatar
              src="/static/images/avatar/1.jpg"
              className="logo"
              sx={{
                position:"static",
                marginLeft:"1px",
                marginTop:"1px",
                bgcolor: "rgb(50, 55, 101)",
              }}
            ></Avatar>
          </span>
          <span className="avatar">
            <Avatar
              src="/static/images/avatar/1.jpg"
              className="logo"
              sx={{
                position:"static",
                marginLeft:"1px",
                marginTop:"1px",
                bgcolor: "rgb(50, 55, 101)",
              }}
            ></Avatar>
          </span>
          
          
          {/* <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{
              margin: "20px",
              position: "static",
              bgcolor: "rgb(50, 55, 101)",
            }}
          ></Avatar>
          <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{
              margin: "20px",
              position: "static",
              bgcolor: "rgb(50, 55, 101)",
            }}
          ></Avatar>
          <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{
              margin: "20px",
              position: "static",
              bgcolor: "rgb(50, 55, 101)",
            }}
          ></Avatar>
          <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{
              margin: "20px",
              position: "static",
              bgcolor: "rgb(50, 55, 101)",
            }}
          ></Avatar> */}
          {/* <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i> */}
        </div>
      </>
    );
  }
}
