import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
      const {items, handleChange, handleSubmit, editItem}
    return (
      <div className="input">
        <form className="form" onSubmit={handleSubmit}>
          <span>
            <input type="text" className="input" placeholder="Add Your Items" onChange={}/>
          </span>
        </form>
      </div>
    );
  }
}
