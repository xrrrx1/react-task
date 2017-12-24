import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header";
import Todo from "./Todo";
import Form from "./Form";

class App extends Component {
    static propTypes = {
        title: PropTypes.string,
        initialData: PropTypes.array.isRequired
    };

    static defaultProps = {
        title: 'Todo Task'
    };

    state = {
        todos: this.props.initialData
    };

    render() {
        const {title, completed} = this.props;
        return (
            <main>

                <Header title={title}/>

                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onStatusChange={this.handleStatusChange}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}/>)}
                </section>

                <Form onAdd={this.handleAdd}/>
            </main>
        )
    }

    handleStatusChange = (id) => {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos
        });

    };

    handleDelete = (id) => {
        let todos = this.state.todos.filter(todo => todo.id !==id);

        this.setState({
            todos
        });

    };

    handleAdd = (title) => {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };

        let todos = [...this.state.todos, todo];

        this.setState({
            todos
        });

    };

    nextId = () => {
        this._nextId = this._nextId || 4;
        return this._nextId++;
    };

    handleEdit = (id, title) => {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        });

        this.setState({
            todos
        });

    };
}

export default App
