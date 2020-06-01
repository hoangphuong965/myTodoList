import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from ""



import "./components/todo.css";

export default class App extends Component {
  state={
    items: [],
    
  }
  render() {
    console.log(uuidv4());

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
