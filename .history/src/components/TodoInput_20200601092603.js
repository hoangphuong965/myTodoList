import React, { Component } from 'react';
import './todo.css';

export default class TodoInput extends Component {
    render() {
        return (
            <div className="input">
                <form className="form">
                    <input type="text" className="input"/>
                </form>
            </div>
        )
    }
}
