import React, { Component } from 'react';
import logo from './adidas-black-vector-logo-400x400.png'
import soccer from './soccer.jpg'
import running from './Running.png'
import basketball from './basketball.jpg'
import football from './football.jpg'
import adidas from './adidas.svg'
import first from './first.jpg'
import second from './second.png'
import third from './third.jpg'

class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        let style = {
            width: 17 + 'vw',

        }
        let style2 = {
            width: 15 + 'vw',
        }
        let style3 = {
            width: 18 + 'vw',
            border: 0
        }
        let style4 ={
            borderRight:1 +'px solid gray',
            height: 400+'px',
            width: 15 + 'vw',

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
                        <li className='mens-box'>MEN
                            <div className='mens-items'>
                                <div style={style}>
                                    <ul className='featured-list'>
                                        <h3>Featured</h3>
                                        <li>New Arrivals</li>
                                        <li>Best Sellers</li>
                                        <li>Release Dates</li>
                                        <li><strong>Sale - New Markdowns Added</strong></li>
                                        <li><br /></li>
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
                        <li className='womens-box'>WOMEN
                            <div className='womens-items'>
                                <div style={style}>
                                    <ul className='featured-list'>
                                        <h3>Featured</h3>
                                        <li>New Arrivals</li>
                                        <li>Best Sellers</li>
                                        <li><strong>Sale - New Markdowns Added</strong></li>
                                        <li><br /></li>
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
                        <li className='kids-box'>KIDS
                            <div className='kids-items'>
                                <div style={style}>
                                    <ul className='featured-list'>
                                        <h3>Featured</h3>
                                        <li>New Arrivals</li>
                                        <li>Best Sellers</li>
                                        <li><strong>Sale - New Markdowns Added</strong></li>
                                        <li><br /></li>
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
                                   <br />(8-14 Years)</h4>
                                        <li>Original Shoes</li>
                                        <li>Sport Shoes</li>
                                        <li>All Shoes</li>
                                        <li><span style={{ "color": 'gray' }}>--</span></li>
                                        <li>Jackets & Vests</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Track Suits & Warm Up</li>
                                        <li>Tops & Tees</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>

                                    </ul><p style={{ 'fontSize': 14 + 'px', 'borderTop': 1 + 'px solid gray' }}>all Youth</p>
                                </div>
                                <div style={style}>
                                    <ul className='featured-list'>
                                        <h4 className='kids-headers'>Children
                                   <br />(4-8 Years)</h4>
                                        <li>Original Shoes</li>
                                        <li>Sport Shoes</li>
                                        <li>All Shoes</li>
                                        <li><span style={{ "color": 'gray' }}>--</span></li>
                                        <li>Jackets & Vests</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Track Suits & Warm Up</li>
                                        <li>Tops & Tees</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>

                                    </ul><p style={{ 'fontSize': 14 + 'px', 'borderTop': 1 + 'px solid gray' }}>all Children</p>
                                </div>
                                <div style={style}><ul className='featured-list'>
                                    <h4 className='kids-headers'>Infant &
                                   <br />Toddlers<br />(0-3 Years)</h4>
                                    <li>Original Shoes</li>
                                    <li>Sport Shoes</li>
                                    <li>All Shoes</li>
                                </ul>
                                </div>
                                <div style={style}>
                                    <ul className='featured-list'>
                                        <h4 className='kids-headers'>Accessories</h4>
                                        <li>Balls</li>
                                        <li>Backpacks & Bags</li>
                                        <li>Socks</li>
                                        <li>Hats & Beanies</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className='sport-box' style={{ 'borderLeft': 1 + 'px solid lightgray' }}>SPORTS
                            <div className='sports-tab'>
                                <div style={style2}>
                                    <ul className='featured-list'>
                                        <h3>Running</h3>
                                        <li><img src={running} /></li>
                                        <li>Shoes</li>
                                        <li>Apparel</li>
                                        <li>Accessories</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                        <li>UltraBOOST</li>
                                        <li>AlpheBOUNCE</li>
                                        <li>UltraBOOST X</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                    </ul>
                                    <p style={{ 'fontSize': 14 + 'px' }}><strong>all Running</strong></p>
                                </div>
                                <div style={style2}>
                                    <ul className='featured-list'>
                                        <h3>Soccer</h3>
                                        <li><img src={soccer} /></li>
                                        <li>Shoes</li>
                                        <li>Apparel</li>
                                        <li>Accessories</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                        <li>Ace</li>
                                        <li>X</li>
                                        <li>Nemeziz</li>
                                        <li>Copa</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                    </ul>
                                    <p style={{ 'fontSize': 14 + 'px' }}><strong>all Soccer</strong></p>
                                </div>
                                <div style={style2}>
                                    <ul className='featured-list'>
                                        <h3>Basketball</h3>
                                        <li><img src={basketball} /></li>
                                        <li>Shoes</li>
                                        <li>Apparel</li>
                                        <li>Accessories</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                        <li>James Harden</li>
                                        <li>Damian Lillard</li>
                                        <li>Crazy Explosive</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                    </ul>
                                    <p style={{ 'fontSize': 14 + 'px' }}><strong>all Basketball</strong></p></div>
                                <div style={style2}>
                                    <ul className='featured-list'>
                                        <h3>Football</h3>
                                        <li><img src={football} /></li>
                                        <li>Cleats</li>
                                        <li>Apparel</li>
                                        <li>Accessories</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                        <li>Compression</li>
                                        <li>FREAK Cleats</li>
                                        <li>AdiZero 5-Star</li>
                                        <li><span style={{ 'color': 'grey' }}>--</span></li>
                                    </ul>
                                    <p style={{ 'fontSize': 14 + 'px' }}><strong>all Football</strong></p>
                                </div>
                                <div style={style2}>
                                    <ul className='featured-list' style={{ 'borderLeft': 1 + 'px solid lightgray', marginLeft: 55}}>
                                        <h3 style={{paddingLeft: 40 + 'px'}}>Other Sports</h3>
                                        <li>Training</li>
                                        <li>Baseball</li>
                                        <li>Outdoor</li>
                                        <li>Skateboarding</li>
                                        <li>Snowboarding</li>
                                        <li>Tennis</li>
                                        <li>Golf</li>
                                        <li>Hockey</li>
                                        <li>Lacrosse</li>
                                        <li>Volleyball</li>
                                        <li>Yoga</li>
                                        <li>Weightlifting</li>
                                    </ul></div>
                            </div>
                        </li>
                        <li className='brands-box'>BRANDS
                            <div className='brands-menu'>
                                <div style={style3}>                               
                                 <h3 style={{marginLeft:60+'px'}}><img src={adidas} style={{marginRight: 20 + 'px', fill: 'blue'}}/>originals</h3>
                                <ul className='brands-list' style={{ marginLeft: 55, borderTop: 3 + 'px solid lightblue'}}>
                                        <li></li>
                                        <li><img src={first}/></li>
                                        <li>Men's Apparel</li>
                                        <li>Women's Apparel</li>
                                        <li>Kid's Apparel</li>
                                        <li>New Arrivals</li>
                                        <li>--</li>
                                        <li>ZNE</li>
                                        <li>adidas X Reigning Champ</li>
                                        <li>--</li>
                                        <li>all Athletics</li>
                                    </ul>
                                </div>
                                <div style={style2}>
                                <h3 style={{ paddingTop: 13, paddingLeft:4+'%', fontSize: 1 + 'rem',textAlign:'none',color: 'gray'}}>ADIDAS ATHLETICS</h3>
                                <ul className='brands-list' style={{ marginLeft: 15, borderTop: 3 + 'px solid lightgray', width: 90+ '%'}}>
                                        <li></li>
                                        <li><img src={second}/></li>
                                        <li>Shoes</li>
                                        <li>Apparel</li>
                                        <li>Accessories</li>
                                        <li>New Arrivals</li>
                                        <li>--</li>
                                        <li>SuperStar</li>
                                        <li>Stan Smith</li>
                                        <li>NMD</li>
                                        <li>all Originals</li>
                                    </ul>
                                </div>
                                <div style={style2}>
                                <h3 style={{paddingLeft: 4+'%',fontSize: 1 + 'rem', color: 'lightgray'}}><img src={adidas}/>stella mccartney</h3>
                                <ul className='brands-list' style={{ marginLeft: 15, borderTop: 3 + 'px solid lightgray', width: 90+'%'}}>
                                        <li></li>
                                        <li><img src={third}/></li>
                                        <li>Men's Apparel</li>
                                        <li>Women's Apparel</li>
                                        <li>Kid's Apparel</li>
                                        <li>New Arrivals</li>
                                        <li>--</li>
                                        <li>ZNE</li>
                                        <li>adidas X Reigning Champ</li>
                                        <li>--</li>
                                        <li>all Athletics</li>
                                    </ul>
                                </div>
                                <div style={style4}>
                                <h2 style={{fontSize: 1.2+'rem',paddingTop: 5+'px', textAlign:'left',paddingLeft:23+'px',paddingBottom:10+'px'}}>COLLECTIONS</h2>
                                <ul className='brands-list' style={{paddingLeft:15+'px'}}>
                                        <li>EQT</li>
                                        <li>Gazelle</li>
                                        <li>Campus</li>
                                        <li>Tubular</li>
                                        <li>Iconics</li>
                                        <li>--</li>
                                        <li>adicolor Apparel</li>
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