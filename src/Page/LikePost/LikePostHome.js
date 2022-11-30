import React from "react";
import "./LikePostHome.css";
import LikePost from "../../Page/LikePost/index";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

export default class LikePostHome extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ backgroundColor: "#fafafa",marginTop:"60px",overflowY:"auto",height:"calc(100vh - 60px)",marginRight:"2px" }} id='scrollBar' >
          <div className="likePostHeader">
            <h1 style={{ color: "rgb(55,55,101)" }}>Liked Post</h1>
          </div>
          <div className="LikePostHome">
            <LikePost />
            <span style={{marginTop:"-40px"}}><Sidebar /></span>
          </div>
        </div>
      </>
    );
  }
}
