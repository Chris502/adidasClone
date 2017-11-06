import React, { Component } from 'react';
import logo from './adidas-black-vector-logo-400x400.png'

class Header extends Component{
    constructor(){
        super();
        this.state = {}
    }
render(){
    return(
        <div className="header-main">
        
        <img src={logo} className="logo-head"></img>
        <div className='login-bar'>
            <p>testt</p>
        </div>
        </div>
    )
}
}
export default Header