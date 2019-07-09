import React, { Component } from 'react'
import './App.css'
import FastfoodForm from './components/fastfood/FastfoodForm'
import FastfoodList from './components/fastfood/FastfoodList'

class App extends Component {
	render() {
		return (
			<div className="App">
				<FastfoodForm />
				<FastfoodList />
			</div>
		)
	}
}

export default App
