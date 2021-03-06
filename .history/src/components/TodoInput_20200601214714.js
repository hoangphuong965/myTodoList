import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
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
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase text"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}
