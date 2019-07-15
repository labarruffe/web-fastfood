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
                <Link to="/" className="nav-link active">FastfoodList</Link>
            </li>
            <li className="nav-item">
                <Link to="/new" className="nav-link">CreateFastfoodForm</Link>
            </li>
            <li className="nav-item">
                <Link to="/edit/:id" className="nav-link">EditFastfoodForm</Link>
            </li>
        </ul>
    );
  }
}