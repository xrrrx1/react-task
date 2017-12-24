import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Checkbox from "./Checkbox";
import Button from "./Button";

class Todo extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        onStatusChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    render() {
        const {title, completed, onStatusChange, id, onDelete} = this.props;

        return (
            <div className={`todo${completed ? ' completed' : ''}`}>

                <Checkbox checked={completed} onChange={() => onStatusChange(id)}/>

                <span className={"todo-title"}>{title}</span>

                <Button className={"delete icon"} icon={'delete'} onClick={() => onDelete(id)}/>

            </div>
        )
    }
}

export default Todo