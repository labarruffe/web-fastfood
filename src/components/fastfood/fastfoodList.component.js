import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fastfood = props => (
    <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">{props.fastfood.name}</h5>
            <p className="card-text">{props.fastfood.ingredients}</p>
            <a href="#" className="btn btn-primary">{props.fastfood.price}</a>
        </div>
        <div className="card-footer text-muted">
            <Link to={"/edit/" + props.fastfood.id}>editar</Link> | <a href="#" onClick={() => { props.deleteFastfood(props.fastfood.id)}}>deletar</a>
        </div>
    </div>
)

export default class FastfoodList extends Component {
    baseUrl = 'http://localhost:4200';

    constructor(props) {
        super(props);
        
        this.deleteFastfood = this.deleteFastfood.bind(this);

        this.state = {
            fastfoods: []
        }
    }

	componentDidMount() {
        axios
        .get(`${this.baseUrl}/fastfoods`)
        .then(response => {
            this.setState({ fastfoods: response.data })
        })
        .catch(error => {
            alert('Ocorreu um erro, consulte os logs!');
            console.log(error);
        })
    }
    
    deleteFastfood(id) {
        axios
        .delete(`${this.baseUrl}/fastfood/${id}`)
        .then(response => {
            alert('Fastfood ' + id + ' deletado com sucesso!\n' + JSON.stringify(response.data));

            this.state({
                fastfoods: this.state.fastfoods.filter(el => el.id !== id)
            })
        })
    }
    
    fastfoodList() {
        return this.state.fastfoods.map(current => {
            return <Fastfood fastfood={current} deleteFastfood={this.deleteFastfood} key={current.id}/>;
        })
    }

    render() {
        return (
            <div>
				<h4>Lista de Fastfood</h4>
                { this.fastfoodList() }
            </div>
        )
    }
}
