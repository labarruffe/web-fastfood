import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fastfood = props => (
    <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">{props.fastfood.name}</h5>
                <p className="card-text">
                    {
                        props.fastfood.ingredients.length > 1 ? props.fastfood.ingredients.join(', ') : props.fastfood.ingredients
                    }
                </p>
            <p className="card-text">{props.fastfood.price}</p>
        </div>
        <div className="card-footer text-muted">
            <Link to={"/edit/" + props.fastfood._id}>editar</Link> | <a href="#" onClick={() => { props.deleteFastfood(props.fastfood._id)}}>deletar</a>
        </div>
    </div>
)

export default class FastfoodList extends Component {
    baseUrl = 'http://localhost:3000/fastfood_store';

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
        .delete(`${this.baseUrl}/fastfoods/${id}`)
        .then(response => {
            alert('Fastfood ' + id + ' deletado com sucesso!');

            this.setState({
                fastfoods: response.data
            })
        })
    }
    
    fastfoodList() {
        return this.state.fastfoods.map(current => {
            return <Fastfood fastfood={current} deleteFastfood={this.deleteFastfood} key={current._id}/>;
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
