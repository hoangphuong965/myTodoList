import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
        <div className="list">
            <ul className>
                
            </ul>
        </div>
    );
  }
}
