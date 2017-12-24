import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Button from "./Button";

class Form extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };
    
    state = {
        title: ''
    };

    render() {
        const {title} = this.state;

        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" value={title} placeholder={'What i need to do?'} onChange={this.handleChange}/>
                <Button type={'submit'}>Add</Button>
            </form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({
                title: ''
            });

        }
    };

    handleChange = (e) => {
        let title = e.target.value;

        this.setState({
            title
        });

    };
}

export default Form