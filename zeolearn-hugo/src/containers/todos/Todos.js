import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        todo: '',
        todos: []
    }

    changeText = (event) => {
        this.setState({ todo: event.target.value })
    }

    addTodo = () => {
        this.setState({
            todos: [...this.state.todos, { text: this.state.todo, isDone: false} ],
            todo: ''
        })
    }

    deleteTodo = (index) => {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, index),
                
                ...this.state.todos.slice(index + 1)
            ]
        })
    }

    updateTodo = (todo, index) => {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, index),
                {...todo, isDone: !todo.isDone},
                ...this.state.todos.slice(index + 1)
            ]
        }) 
    }

    render() {
        return (
            <div>
                <h1>Hellos</h1>
                <div>
                    <input type="text" value={this.state.todo} onChange={this.changeText} placeholder="Write your todo Here" />
                    <button type="button" onClick={this.addTodo}>Add Todo</button>
                </div>
                <div>
                    {
                        this.state.todos.map((todo, index) => {
                            return <div key={index} style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 10
                            }}>
                                <input type="checkbox" checked={todo.isDone} onChange={() => this.updateTodo(todo, index)} />
                                <p style={{
                                    textDecoration: todo.isDone ? 'line-through' : 'none'
                                }}>{todo.text}</p>
                                <button type="button" onClick={() => this.deleteTodo(index)}>Delete</button>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
