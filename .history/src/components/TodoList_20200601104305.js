import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
        <div >
            <ul className="list">
                {items.map(item=>{
                    return{}
                })}
            </ul>
        </div>
    );
  }
}
