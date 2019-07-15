import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class FastfoodForm extends Component {
	baseUrl = 'http://localhost:4200';

	constructor(props) {
		super(props);

		this.state = {
			id: '',
			name: '',
            ingredients: '',
            price: 0
        }
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	
	submitHandler = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(`${this.baseUrl}/fastfoods`, this.state)
			.then(response => {
				console.log(response);
				alert('Fastfood cadastrado com sucesso!\n' + JSON.stringify(response.data));
			})
			.catch(error => {
				alert('Ocorreu um erro, consulte os logs!');
				console.log(error);
			})
	}

	render() {
		const { name, ingredients, price } = this.state;
		return (
			<form onSubmit={this.submitHandler}>
				<label>
				Nome
				<br />
				<input
					name="name"
					type="text"
					value={name}
					onChange={this.changeHandler}
				/>
				</label>
				<br /><br />
				<label>
				Ingredientes
				<br />
				<input
					name="ingredients"
					type="text"
					value={ingredients}
					onChange={this.changeHandler}
				/>
				</label>
				<br /><br />	
				<label>
				Valor
				<br />
				<input
					name="price"
					type="number"
					value={price}
					step="any"
					onChange={this.changeHandler}
				/>
				</label>
				<br /><br />
				<button type="submit">Salvar</button>
				<br /><br />
				{/* <Link to="/list">Lista de fastfoods</Link> */}
			</form>
		)
	}
}

export default FastfoodForm