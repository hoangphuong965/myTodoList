import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import { isUuid } from 'uuidv4';


import "./components/todo.css";

export default class App extends Component {
  state={
    items: [],
    
  }
  render() {
    console.log(uuid())
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
