import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="input">
        <form className="form">
          <div className="div_input">
            <input type="text" className="input" placeholder="Add Your Items" />
          </div>
        </form>
      </div>
    );
  }
}
