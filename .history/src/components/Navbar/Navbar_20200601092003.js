import React, { Component } from "react";
import "./navbar.css";
import "./infoApp";
import infoApp from "./infoApp";

export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">
          TODO APP
        </a>
        <infoApp href="#about">About</infoApp>
      </div>
    );
  }
}
