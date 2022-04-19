import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todos, onCheckedToggle}) => {
    return (
    <div className="todo-list">
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onCheckedToggle={onCheckedToggle}/>
        ))}
    </div>
    );
};

export default TodoList;