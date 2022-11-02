import React from 'react'
import Follwing from './Follwing';
import './Sidebar.css'


export default class Sidebar extends React.Component{
    render()
    {
        return(
            <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <div className='user'>
                        <span><i className="fa fa-user-circle-o userIcon" aria-hidden="true" > </i></span>
                        <div className="userName">Ritik Gupta</div>
                        <span className='switch'>switch</span>
                    </div>
                    <div className='sugg'>
                        <span>Suggestions for you</span>
                        <span className='see'>see All</span>
                    </div>
                    <Follwing followUser="sejal" follow="follow"/>
                    <Follwing followUser="aman" follow="follow"/>
                    <Follwing followUser="raja" follow="follow"/>
                    <Follwing followUser="manish" follow="follow"/>
                </div>
            </div>
            
            </>
        );
    }
  
}
