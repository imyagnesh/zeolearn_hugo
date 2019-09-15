import React, { Component } from 'react'
import AddTodo from './addTodo';
import TodoList from './todoList';
import FilterTodos from './filterTodos';




export default class Todos extends Component {
    state = {
        todos: [
            {
                id: 2131231,
                text: 'Get Milk',
                isDone: false
            }
        ],
        filterStatus: 'all'
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        this.setState({
            todos: todos.filter(x =>  x.id !== id)
        })
    }

    toggleTodo = (todo) => {
        const { todos } = this.state;
        const index = todos.findIndex(x => x.id === todo.id);
        const updatedTodos = [
            ...todos.slice(0, index),
            {...todo, isDone: !todo.isDone},
            ...todos.slice(index + 1)
        ];
        this.setState({
            todos: updatedTodos
        });
    }

    onFilterTodos = (status) => {
        this.setState({ filterStatus: status })
    }

    render() {
        const { todos, filterStatus } = this.state;
        let filterTodos = todos;
        if(filterStatus === 'pending') {
            filterTodos = todos.filter(x => !x.isDone)
        }
        if(filterStatus === 'completed') {
            filterTodos = todos.filter(x => x.isDone)
        }
        return (
            <div>
                <h1>My Todos</h1>
                <AddTodo todos={todos} onAddTodo={(todos) => {
                    this.setState({ todos })
                }} /> 
                <TodoList todos={filterTodos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
                <FilterTodos filterStatus={filterStatus} onFilter={this.onFilterTodos} />
            </div>
        )
    }
}
