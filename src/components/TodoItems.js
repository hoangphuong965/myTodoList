import React, { Component } from "react";

export default class TodoItems extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <div className="item">
        <li className="item_li">
          <h3>{title}</h3>
          <div className="item_li-icon">
            <span className="pen">
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                style={{ color: "green" }}
                onClick={handleEdit}
              ></i>
            </span>
            <span>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                style={{ color: "red" }}
                onClick={handleDelete}
              ></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
