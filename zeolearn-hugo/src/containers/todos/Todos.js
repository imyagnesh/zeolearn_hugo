import React, { PureComponent, Fragment } from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList';

export default class Todos extends PureComponent {
    state = {
        todo: '',
        todos: []
    }

   
    // shouldComponentUpdate(nextProps, nextState) {
    //     if( nextProps !== this.props && nextState !== this.state) {
    //         return true;
    //     }
    //     return false
    // }
    

    changeText = (event) => {
        this.setState({ todo: event.target.value })
    }

    addTodo = (event) => {
        event.preventDefault()
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
        console.log('Todos');
        const { todo: todoObj, todos } = this.state;
        return (
            <Fragment>
                <h1>Hellos</h1>
                <AddTodo addTodo={this.addTodo} changeText={this.changeText} value={todoObj} />
                {todos.length > 0 && <TodoList todos={todos} toggleTodo={this.updateTodo} deleteTodo={this.deleteTodo} />}
            </Fragment>
        )
    }
}
