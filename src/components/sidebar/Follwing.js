import React from 'react'
import "./Following.css"

export default class Follwing extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            follow:"Follow"
        };
    }
    changeFollow=(e)=>{
        e.preventDefault();
        this.state.follow==="Follow"?this.setState({follow:"Following"}):this.setState({follow:"Follow"});
    }
    render()
    {
        return(
            <>
            <div className='row'>
                <i className="fa fa-user-circle-o user-icon" aria-hidden="true" > </i>
                {this.props.followUser}
                <span className="sideRight" onClick={this.changeFollow}>{this.state.follow}</span> 
            </div>
            </>
        );
    }
}
