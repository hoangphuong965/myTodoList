import React, { Component } from "react";
import "./navbar.css";
import "./"

export default class Navbar extends Component {
  render() {
    return (
      <div class="topnav">
        <a class="active" href="#home">
          TODO APP
        </a>
        <a href="#about">About</a>
      </div>
    );
  }
}
