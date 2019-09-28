import React,  { memo } from 'react'


const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    console.log('Todo List')
    return (
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>
                    <input type="checkbox" value={todo.isDone} onChange={() => toggleTodo(todo, index)} />
                    <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            })}
            
        </div>
)
}

export default memo(TodoList);

