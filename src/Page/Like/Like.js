import React, { Component } from "react";
import Navbar from "../../components/Navbar";

export default class Like extends Component {
  // componentDidMount(){
  //     const {fetchData}=this.props;
  //     fetchData();
  // }
  render() {
    return (
      <>
        <Navbar />
        <div className="likeHome">
          {postReduxStateVariable.length !== 0 ? (
            postReduxStateVariable &&
            postReduxStateVariable.map((data) => <Post post={data} />)
          ) : (
            <h2 className="errorLike">
              Sorry! No Post
              <br />
              *Like a new Post and see all your Liked post here*
            </h2>
          )}
        </div>
      </>
    );
  }
}
