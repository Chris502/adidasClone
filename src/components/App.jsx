import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import '../styles/App.css'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<Header/>
				<p>Testing!</p>
			</div>
		)
	}
}