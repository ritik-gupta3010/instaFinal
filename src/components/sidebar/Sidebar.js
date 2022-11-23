import React from "react";
import Follwing from "./Follwing";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <div className="sidebarItem">
            {/* <div className="user">
              
              <Avatar
                src=""
                sx={{ position: "static", marginLeft: "5%",bgcolor: "rgb(50, 55, 101)" }}
              >RG</Avatar>
              <div className="userSwitch">
                <span className="userName">Ritik Gupta</span>
                <span className="switch">switch</span>
              </div>
            </div> */}
            <div className="row">
              {/* <i className="fa fa-user-circle-o user-icon" aria-hidden="true" > </i>
          <span style={{ marginTop: "8px" ,color: "blue"}}>{followUser}</span> */}
              <div style={{ display: "flex" }}>
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    margin: "5px",
                    position: "static",
                    bgcolor: "rgb(50, 55, 101)",
                  }}
                >
                  RG
                </Avatar>
                <span style={{ marginTop: "8px" }}>Ritik Gupta</span>
              </div>
              {/* <span className="sideRight">switch</span> */}
            </div>
            <div className="sugg">
              <span>Suggestions for you</span>
              {/* <span className="see">see All</span> */}
            </div>
            <Follwing followUser="sejal" follow="follow" />
            <Follwing followUser="aman" follow="follow" />
            <Follwing followUser="raja" follow="follow" />
            <Follwing followUser="manish" follow="follow" />
          </div>
        </div>
      </>
    );
  }
}
