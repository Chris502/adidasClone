import React, { Component } from 'react';
import logo from './adidas-black-vector-logo-400x400.png'

class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        let style ={
         width: 17 + 'vw',
       
    }
        return (
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
                        <li className='mens-box'><strong>MEN</strong>
                            <div className='mens-items'>
                                <div style={style}>
                                <ul className='featured-list'>
                                    <h3>Featured</h3>
                                    <li>New Arrivals</li>
                                    <li>Best Sellers</li>
                                    <li>Release Dates</li>
                                    <li><strong>Sale - New Markdowns Added</strong></li>
                                    <li><br/></li>
                                    <li>EQT</li>
                                    <li>Tubular</li>
                                    <li>NMD</li>
                                    <li>UltraBOOST</li>
                                    <li>adidas x Reigning Champ</li>
                                    <li>Winter Layers</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list shoe-list'>
                                    <h3>Shoes</h3>
                                    <li>Originals</li>
                                    <li>Running</li>
                                    <li>Soccer</li>
                                    <li>Basketball</li>
                                    <li>Training</li>
                                    <li>Football</li>
                                    <li>Sandals & Slides</li>
                                    <li>Outdoor</li>
                                    <li>Tennis</li>
                                    <li>Skateboard</li>
                                    <li>Baseball</li>
                                    <li>Golf</li>
                                    <li>Customize with mdidas</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list apparel'>
                                    <h3>Apparel</h3>
                                    <li>Pants</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets</li>
                                    <li>Track Suit & Warm Ups</li>
                                    <li>Short Sleeve Shirts</li>
                                    <li>Long Sleeve Shirts</li>
                                    <li>Polos</li>
                                    <li>Graphic T-Shirts</li>
                                    <li>Jerseys</li>
                                    <li>Tights</li>
                                    <li>Shorts</li>
                                    <li>Tank Tops</li>
                                    <li>Underwear</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list accessories'>
                                    <h3>Accessories</h3>
                                    <li>Bags & Backpacks</li>
                                    <li>Hats & Beanies</li>
                                    <li>Socks</li>
                                    <li>Phonecases</li>
                                    <li>Watches</li>
                                    <li>Sunglasses</li>
                                    <li>Balls</li>
                                    <li>Gloves</li>
                                    <li>Scarves</li>
                                    <li>All Accessories</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list sports'>
                                    <h3>Sports</h3>
                                    <li>Running</li>
                                    <li>Soccer</li>
                                    <li>Basketball</li>
                                    <li>Training</li>
                                    <li>Football</li>
                                    <li>Outdoor</li>
                                    <li>Tennis</li>
                                    <li>Softball</li>
                                    <li>Golf</li>
                                    <li>Lacrosse</li>
                                </ul>
                                </div>
                            </div></li>
                        <li className='womens-box'><strong>WOMEN</strong>
                            <div className='womens-items'>
                            <div style={style}>
                            <ul className='featured-list'>
                                    <h3>Featured</h3>
                                    <li>New Arrivals</li>
                                    <li>Best Sellers</li>
                                    <li><strong>Sale - New Markdowns Added</strong></li>
                                    <li><br/></li>
                                    <li>EQT</li>
                                    <li>Tubular</li>
                                    <li>NMD</li>
                                    <li>UltraBOOST</li>
                                    <li>adidas x Reigning Champ</li>
                                    <li>Winter Layers</li>
                                </ul>
                            </div>
                                <div style={style}>
                                <ul className='featured-list shoe-list'>
                                    <h3>Shoes</h3>
                                    <li>Originals</li>
                                    <li>Running</li>
                                    <li>Soccer</li>
                                    <li>Basketball</li>
                                    <li>Training</li>
                                    <li>Football</li>
                                    <li>Sandals & Slides</li>
                                    <li>Outdoor</li>
                                    <li>Tennis</li>
                                    <li>Skateboard</li>
                                    <li>Baseball</li>
                                    <li>Golf</li>
                                    <li>Customize with mdidas</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list apparel'>
                                    <h3>Apparel</h3>
                                    <li>Pants</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets</li>
                                    <li>Track Suit & Warm Ups</li>
                                    <li>Short Sleeve Shirts</li>
                                    <li>Long Sleeve Shirts</li>
                                    <li>Polos</li>
                                    <li>Dresses & Skirts</li>
                                    <li>Sports Bras</li>
                                    <li>Tights</li>
                                    <li>Shorts</li>
                                    <li>Tank Tops</li>
                                    <li>Underwear</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list accessories'>
                                    <h3>Accessories</h3>
                                    <li>Bags & Backpacks</li>
                                    <li>Hats & Beanies</li>
                                    <li>Socks</li>
                                    <li>Watches</li>
                                    <li>Sunglasses</li>
                                    <li>Balls</li>
                                    <li>Gloves</li>
                                    <li>Scarves</li>
                                    <li>All Accessories</li>
                                </ul>
                                </div>
                                <div style={style}>
                                <ul className='featured-list sports'>
                                    <h3>Sports</h3>
                                    <li>Running</li>
                                    <li>Soccer</li>
                                    <li>Training</li>
                                    <li>Yoga</li>
                                    <li>Outdoor</li>
                                    <li>Tennis</li>
                                    <li>Softball</li>
                                    <li>Golf</li>
                                    <li>Lacrosse</li>
                                </ul>
                                </div>
                            </div>
                        </li>
                        <li className='kids-box'><strong>KIDS</strong>
                            <div className='kids-items'>
                            <div style={style}>
                            <ul className='featured-list'>
                                    <h3>Featured</h3>
                                    <li>New Arrivals</li>
                                    <li>Best Sellers</li>
                                    <li><strong>Sale - New Markdowns Added</strong></li>
                                    <li><br/></li>
                                    <li>EQT</li>
                                    <li>Tubular</li>
                                    <li>NMD</li>
                                    <li>UltraBOOST</li>
                                    <li>adidas x Reigning Champ</li>
                                    <li>Winter Layers</li>
                                </ul>
                            </div>
                                <div style={style}>
                                <ul className='featured-list'>
                                    <h4 className='kids-headers'>Youth
                                   <br/>(8-14 Years)</h4>
                                    <li>Original Shoes</li>
                                    <li>Sport Shoes</li>
                                    <li>All Shoes</li>
                                    <li><span style={{"color":'gray'}}>--</span></li>
                                    <li>Jackets & Vests</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Track Suits & Warm Up</li>
                                    <li>Tops & Tees</li>
                                    <li>Pants</li>
                                    <li>Shorts</li>
                                    
                                </ul><p style={{'fontSize': 14 + 'px', 'borderTop': 1+'px solid gray'}}>all Youth</p>
                                </div>
                                <div style={style}>
                                <ul className='featured-list'>
                                    <h4 className='kids-headers'>Children
                                   <br/>(4-8 Years)</h4>
                                    <li>Original Shoes</li>
                                    <li>Sport Shoes</li>
                                    <li>All Shoes</li>
                                    <li><span style={{"color":'gray'}}>--</span></li>
                                    <li>Jackets & Vests</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Track Suits & Warm Up</li>
                                    <li>Tops & Tees</li>
                                    <li>Pants</li>
                                    <li>Shorts</li>
                                    
                                </ul><p style={{'fontSize': 14 + 'px', 'borderTop': 1+'px solid gray'}}>all Children</p>
                                </div>
                                <div style={style}><ul className='featured-list'>
                                    <h4 className='kids-headers'>Infant &
                                   <br/>Toddlers<br/>(0-3 Years)</h4>
                                    <li>Original Shoes</li>
                                    <li>Sport Shoes</li>
                                    <li>All Shoes</li>
                                    </ul>
                                    </div>
                                <div style={style}><ul className='featured-list'>
                                    <h4 className='kids-headers'>Accessories</h4>
                                    <li>Balls</li>
                                    <li>Backpacks & Bags</li>
                                    <li>Socks</li>
                                    <li>Hats & Beanies</li>
                                    </ul>
                                    </div>
                            </div>
                        </li>
                    </ul>

                </div>



            </div>
        )
    }
}
export default Header