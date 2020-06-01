import React, { Component } from "react";

export default class TodoItems extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <div className="item">
        <li>
          <p>{title}</p>
        </li>
      </div>
    );
  }
}
