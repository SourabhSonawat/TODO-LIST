// import { render } from '@testing-library/react';
import React from 'react';
import Todocard from './Todocard';

const TodoList = ({ tasks, onDelete }) => {
    const renderTasks = tasks.map((task) => {
        return <Todocard task={task} key={task.id} onDelete={onDelete} />
    })
    return <div>
        {renderTasks}
    </div>

};

export default TodoList;