import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import '../styles/App.css'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<Header/>
				<div style={{height: 300+ 'vh'}}>
					a</div>
			</div>
		)
	}
}