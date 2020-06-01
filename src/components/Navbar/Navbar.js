import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">
          TODO APP
        </a>
      </div>
    );
  }
}
