import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Listar</Link>
            </li>
            <li className="nav-item">
                <Link to="/new" className="nav-link">Cadastar</Link>
            </li>
        </ul>
    );
  }
}