import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
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
              disable={item ? false : true}

            />
          </span>
        </form>
      </div>
    );
  }
}
