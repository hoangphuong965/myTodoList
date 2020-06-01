import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="input">
        <form className="form">
            <span>
                <i class="fa fa-list" aria-hidden="true"></i>
            </span>
        </form>
      </div>
    );
  }
}
