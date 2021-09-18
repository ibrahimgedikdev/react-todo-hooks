import React from 'react'

function Footer({todos, setTodos, setStatus }) {
    const unCompletedTodos = todos && todos.filter((todo) => {
       return todo.completed === false
    })

    return (
        <footer className="footer">
            <div className="footer-container">
                <span className="todo-count">{unCompletedTodos.length} items left</span>
                <div className="filter-btns">
                   <button onClick={() => setStatus('All')}>All</button>
                   <button onClick={() => setStatus('Active')}>Active</button>
                   <button onClick={() => setStatus('Completed')}>Completed</button>
                </div>
                <button className="clear-btn" onClick={() => setTodos([])}>Clear completed</button>
            </div> 
        </footer>
    )
}

export default Footer
