import React from 'react'
import "./Story.css"
import {connect} from "react-redux"
import {fetchData} from "../../redux/actions/postActions"

export default class Story extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <>
        <div className="story">
          {/* <img
              src={this.props.post.img}
              alt="postImage"
              className="postTopIcon"
            /> */}
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
            <i className="fa fa-user-circle-o storyIcon" aria-hidden="true" > </i>
        </div>
      </>
    )
  }
}
