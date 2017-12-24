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
        onDelete: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        onEdit: PropTypes.func.isRequired
    };

    state = {
        editing: false
    };

    render() {
        const {title, completed, onStatusChange, id, onDelete} = this.props;

        if (this.state.editing) {
            return (
                <Fragment>
                    <form className={"todo-edit-form"} onSubmit={this.handleSubmit}>
                        <input type={"text"} ref={'title'} defaultValue={title}/>
                        <Button className={'save icon'} icon={'save'} type={'submit'}/>
                    </form>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className={`todo${completed ? ' completed' : ''}`}>

                        <Checkbox checked={completed} onChange={() => onStatusChange(id)}/>

                        <span className={"todo-title"}>{title}</span>

                        <Button className={"edit icon"} icon={'edit'} onClick={() =>
                        this.setState({editing: true})} />

                        <Button className={"delete icon"} icon={'delete'} onClick={() => onDelete(id)} />

                    </div>
                </Fragment>
            )
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);

        this.setState({
            editing:false
        });

    };
}

export default Todo