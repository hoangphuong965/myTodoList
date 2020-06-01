import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
      const {items}
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
