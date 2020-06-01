import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, handleEdit } = this.props;
    return (
      <div className="input">
        <form className="form" onSubmit={handleSubmit}>
          <span>
            <input
              type="text"
              className="input"
              placeholder="Add Your Items"
              value={item}
              onChange={handleChange}
            />
          </span>
          <button type="submit" disabled={item ? false : true} className="btn">
            {handleEdit ? "Add item" : "edit item"}
          </button>
        </form>
      </div>
    );
  }
}
