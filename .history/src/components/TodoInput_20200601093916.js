import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="input">
        <form className="form">
            <span>
                fa
            </span>
            <input type="text" className="input" placeholder="Add Your Items" />
        </form>
      </div>
    );
  }
}
