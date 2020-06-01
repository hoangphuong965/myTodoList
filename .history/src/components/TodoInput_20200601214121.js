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
            className={editItem ? { Red } : { Green }}
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}

const Red = {
  background: red,
};
const Green = {
  background: green,
};
