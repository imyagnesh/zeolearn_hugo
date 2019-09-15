import React, { Component } from 'react'

export default class addTodo extends Component {
    state = {
        todo: '',
        error: '',
    }

    changeText = (event) => {
        this.setState({ todo: event.target.value, error: '' })
    }

    addTodo = (event) => {
        event.preventDefault()
        const { todo } = this.state;
        const { todos, onAddTodo } = this.props;
        if(todo) {
            const updatedTodos = [...todos, { id: todos.length + 1 , text: todo, isDone: false }];
            this.setState({ todo: '' })
            onAddTodo(updatedTodos)
        } else {
            this.setState({ error: 'Please enter your todo'});
        }
    }

    render() {
        const { error, todo } = this.state
        return (
            <div>
                {error && <h3 style={{ color: 'red'}}>{error}</h3>}
                <form onSubmit={this.addTodo}>
                    <input type="text" value={todo} onChange={this.changeText} required />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}
