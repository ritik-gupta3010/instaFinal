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
        const {follow}=this.state;
        e.preventDefault();
        follow==="Follow"?this.setState({follow:"Following"}):this.setState({follow:"Follow"});
    }
    render()
    {
        const {followUser}=this.props;
        const {follow}=this.state;
        return(
            <>
            <div className='row'>
                <i className="fa fa-user-circle-o user-icon" aria-hidden="true" > </i>
                {followUser}
                <span className="sideRight" onClick={this.changeFollow}>{follow}</span> 
            </div>
            </>
        );
    }
}
