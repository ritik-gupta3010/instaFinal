import React from "react";
import "./LikePost.css";
import PropTypes from "prop-types";
import LikePostOne from "./LikePostOne";

class LikePost extends React.Component {
  componentDidMount() {
    const { fetchLikedPost } = this.props;
    // fetchLikedPost();
    this.props.fetchData();
  }

  render() {
    const { postReduxStateVariable } = this.props;

    return (
      <>
        <div className="likePost">
          {postReduxStateVariable.length !== 0 ? (
            postReduxStateVariable &&
            postReduxStateVariable.map((post) =>
              post.like === true ? (
                <LikePostOne
                  post={post}
                  fetchPostComment={this.props.fetchPostComment}
                  reduxCommentVar={this.props.reduxCommentVar}
                  postReduxStateVariable={this.props.postReduxStateVariable}
                  // fetchData={this.props.fetchData}
                />
              ) : null
            )
          ) : (
            <h2 className="error">
              Sorry! No liked Post
              <br />
              *Liked a Post and see all your liked post here*
            </h2>
          )}
        </div>
      </>
    );
  }
}

LikePost.propTypes = {
  postReduxStateLikedPost: PropTypes.object.isRequired,
  fetchLikedPost: PropTypes.func.isRequired,
  postReduxStateVariable: PropTypes.array.isRequired,
};
LikePost.defaultProps = {
  postReduxStateLikedPost: {},
  fetchLikedPost: () => {},
  postReduxStateVariable: [],
};

export default LikePost;
