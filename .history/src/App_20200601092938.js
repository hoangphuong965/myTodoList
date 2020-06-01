import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import "";


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <TodoInput />
      </div>
    );
  }
}
