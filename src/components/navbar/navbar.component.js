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
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link to="/" class="nav-link active">FastfoodList</Link>
            </li>
            <li class="nav-item">
                <Link to="/new" class="nav-link">CreateFastfoodForm</Link>
            </li>
            <li class="nav-item">
                <Link to="/edit/:id" class="nav-link">EditFastfoodForm</Link>
            </li>
        </ul>
    );
  }
}