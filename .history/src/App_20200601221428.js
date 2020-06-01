import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import {ToasContainer, toast} from 'react-toastify';
import {Toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import "./components/todo.css";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
    toast.success("Saved Item")
  };
  handleDelete = (id) => {
    const deleteItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: deleteItem,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
  };

  handleEdit = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    const selectItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filterItem,
      id: uuidv4(),
      item: selectItem.title,
      editItem: true,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ToasContainer autoClose={3000} hideProgressBar/>
          <TodoInput
            item={this.state.item}
            id={this.state.id}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
