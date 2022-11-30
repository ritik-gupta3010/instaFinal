import React from 'react'
import './Home.css'
import Posts from '../../components/Posts/index'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"

export default class Home extends React.Component {
    render()
    {
        return(
            <> 
            <Navbar />
            <div className="home" id='scrollBar'>
                <Posts />
                <Sidebar />
            </div>
            </>
        );
    }
}
