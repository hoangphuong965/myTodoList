import React, { Component } from "react";

export default class TodoInput extends Component {
  disable = (e) =>{
    if(e.target.value === ''){
      
    }
  }
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
              disable={this.disable}
            />
          </span>
        </form>
      </div>
    );
  }
}
