import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateFastfoodForm from './components/fastfood/createFastfoodForm.component'
import EditFastfoodForm from './components/fastfood/editFastfoodForm.component'
import FastfoodList from './components/fastfood/fastfoodList.component'
import Navbarnav from './components/navbar/navbar.component'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Navbarnav />
					<Route path="/" exact component={FastfoodList} />
					<Route path="/new" exact component={CreateFastfoodForm} />
					<Route path="/edit/:_id" exact component={EditFastfoodForm} />
				</div>
			</Router>
		)
	}
}

export default App
