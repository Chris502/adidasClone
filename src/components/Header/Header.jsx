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
            <p className='tracker'>Track Your Order</p>
            |
            <p className='news-letter'>NEWSLETTER SIGNUP</p>
            <p className='login-link'>Login</p>
        </div>
        <div className='menu-div'>
        <ul className='menu'>
            <li className='mens-box'><strong>MEN</strong></li>
            <li><strong>WOMEN</strong></li>
            <li><strong>KIDS</strong></li>
        </ul>
        </div>
        </div>
    )
}
}
export default Header