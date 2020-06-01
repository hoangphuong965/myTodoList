import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import { uuid } from 'uu';


import "./components/todo.css";

export default class App extends Component {
  state={
    items: [],
    id: 
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <TodoInput />
        </div>
      </div>
    );
  }
}
