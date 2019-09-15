import React from 'react'

const filterTodos = ({ onFilter, filterStatus }) => {
    return (
        <div>
            <button style={{ backgroundColor: filterStatus === 'all' ? 'blue' : 'white' }} onClick={() => onFilter('all')}>All</button>
            <button style={{ backgroundColor: filterStatus === 'pending' ? 'blue' : 'white' }} onClick={() => onFilter('pending')}>Pending</button>
            <button style={{ backgroundColor: filterStatus === 'completed' ? 'blue' : 'white' }} onClick={() => onFilter('completed')}>Completed</button>
        </div>
    )
}

export default filterTodos
