import React, { Component } from "react";
import "./navbar.css";
import "./infoApp";
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div class="topnav">
        <Link to='/' class="active" href="#home">
          TODO APP
        </Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
