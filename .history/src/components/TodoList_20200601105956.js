import React, { Component } from "react";
import TodoItems from "./TodoItems";


export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
        <div >
            <ul className="list">
                {items.map(item=>{
                    return(
                        <TodoItems key={item.id} handleEdit={ha}/>
                    )
                })}
            </ul>
        </div>
    );
  }
}
