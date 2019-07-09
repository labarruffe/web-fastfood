import React, { Component } from 'react'
import axios from 'axios'

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
            </div>
        )
    }
}

export default FastfoodList