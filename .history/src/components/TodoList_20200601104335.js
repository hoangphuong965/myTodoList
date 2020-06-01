import React, { Component } from "react";
import TodoItem from "./TodoItem";


export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
        <div >
            <ul className="list">
                {items.map(item=>{
                    return(
                        <TodoItem />
                    )
                })}
            </ul>
        </div>
    );
  }
}
