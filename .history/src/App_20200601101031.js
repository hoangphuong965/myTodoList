import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

import "./components/todo.css";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <TodoInput 
            items={this.state.items}
            id={}
          />
        </div>
      </div>
    );
  }
}
