import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        const {title, handleEdit, handleDelete} = this.props
        return (
            <li>
                <h3>{title}</h3>
            </li>
        )
    }
}
