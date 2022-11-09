import React from 'react'
import "./Story.css"

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
