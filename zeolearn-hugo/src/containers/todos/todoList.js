import React from 'react'

export default ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>
                    <input type="checkbox" value={todo.isDone} onChange={() => toggleTodo(todo)} />
                    <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            })}
        </div>
)
}

