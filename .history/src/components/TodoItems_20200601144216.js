import React, { Component } from "react";

export default class TodoItems extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <div className="item">
        <li className="item_li">
          <p>{title}</p>
          <div className="item_li">
            <span>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
