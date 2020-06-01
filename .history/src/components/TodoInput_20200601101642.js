import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
      const {items, handleChange, }
    return (
      <div className="input">
        <form className="form" onSubmit={}>
          <span>
            <input type="text" className="input" placeholder="Add Your Items" onChange={}/>
          </span>
        </form>
      </div>
    );
  }
}
