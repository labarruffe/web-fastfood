import React, { Component } from 'react'
import './App.css'
import FastfoodForm from './components/fastfood/FastfoodForm'
import FastfoodList from './components/fastfood/FastfoodList'
import { Card, Row, Col } from 'reactstrap';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<div>
					<Row>
						<Col sm="2">
						</Col>
						<Col sm="8">
							<Card body>
								<FastfoodForm />
								<FastfoodList />
							</Card>
						</Col>
						<Col sm="2">
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
