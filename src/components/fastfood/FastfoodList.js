import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FastfoodList extends Component {
    baseUrl = 'http://localhost:4200';

    constructor(props) {
        super(props);

        this.state = {
            fastfoods: []
        }
    }

	componentDidMount() {
		axios.get(`${this.baseUrl}/fastfoods`)
			.then(response => {
				const fastfoods = response.data;
				this.setState({ fastfoods })
            })
        .catch(error => {
            alert('Ocorreu um erro, consulte os logs!');
            console.log(error);
        })
	}
    
    render() {
        const { fastfoods } = this.state;
        return (
            <div>
                <br/>
                <br/>    
                Lista de Fastfoods
                <br/>
                <br/>
                {fastfoods.map(fastfood => 
                    <div key={fastfood.id}>
                        {fastfood.name} - {fastfood.price} - {fastfood.ingredients}
                        <br/><br/>
                    </div>
                )}
                <br/><br/>
                <Link to="/">Cadastrar fastfood</Link>
            </div>
        )
    }
}

export default FastfoodList