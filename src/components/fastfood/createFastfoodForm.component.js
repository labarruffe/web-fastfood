import React, { Component } from 'react';
import axios from 'axios';

export default class FastfoodForm extends Component {
	baseUrl = 'http://localhost:4200';

	constructor(props) {
		super(props);

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeIngredients = this.onChangeIngredients.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
            ingredients: [],
            price: 0
        }
	}
	
	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	onChangeIngredients(e) {
		this.setState({
			ingredients: e.target.value
		});
	}

	onChangePrice(e) {
		this.setState({
			price: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const ingredientsArray = this.state.ingredients.split(', ');
		
		const fastfood = {
			name: this.state.name,
			ingredients: ingredientsArray,
			price: this.state.price
		}

		axios
		.post(`${this.baseUrl}/fastfoods`, fastfood)
		.then(response => {
			alert('Fastfood cadastrado com sucesso!\n' + JSON.stringify(response.data));
			window.location = '/';
		})
		.catch(error => {
			alert('Ocorreu um erro, tente novamente, consulte os logs!');
			console.log(error);
		})

	}

	render() {
		return (
			<div>
				<h4>Cadastro de Fastfood</h4>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Nome</label>
						<input
							type="text"
							className="form-control"
							value={this.state.name}
							onChange={this.onChangeName}
						/>
					</div>
					<div className="form-group">
						<label>Ingredientes</label>
						<input
							type="text"
							className="form-control"
							value={this.state.onChangeIngredients}
							onChange={this.onChangeIngredients}
						/>
					</div>
					<div className="form-group">
						<label>Valor</label>
						<input
							type="text"
							className="form-control"
							value={this.state.price}
							onChange={this.onChangePrice}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Salvar" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}
