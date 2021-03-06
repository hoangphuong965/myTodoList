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
  handleChange = (id) => {
    console.log(`change ${id}`)
  };
  handleSubmit = (id) => {
    console.log(`submit ${id}`)
  };
  editItem = (id) => {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <TodoInput
            item={this.state.items}
            id={this.state.id}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.editItem}
          />
        </div>
      </div>
    );
  }
}
