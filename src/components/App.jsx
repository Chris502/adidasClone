import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import CarouselC from './Carousel/Carousel.jsx'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/App.css'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<Header/>
				<div style={{height: 300+ 'vh',position:'absolute', top: 11+'%'}}>
				<CarouselC/>
				</div>
			</div>
		)
	}
}