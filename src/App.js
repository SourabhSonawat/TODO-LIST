import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskCreate from './Component/TaskCreate';
import TodoList from './Component/TodoList';
const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3005/tasks');

        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);


    // const editTasksById = async (id, newTitle) => {
    //     const response = await axios.post(`http://localhost:3005/tasks/${id}`, {
    //         title: newTitle
    //     })

    //     const updatedTasks = tasks.map((task) => {
    //         if (task.id === id) {
    //             return { ...task, ...response.data };
    //         }

    //         return task;
    //     });

    //     setTasks(updatedTasks);
    // }




    const deleteTaskbyId = async (id) => {
        const response = await axios.delete(`http://localhost:3005/tasks/${id}`)
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(updatedTasks)
    }

    const createTask = async (title) => {
        const response = await axios.post('http://localhost:3005/tasks', {
            title,
        });

        const updatedTasks = [...tasks, response.data];
        setTasks(updatedTasks);
    };


    return (
        <div className='App'>
            <TaskCreate onCreate={createTask} />
            <TodoList tasks={tasks} onDelete={deleteTaskbyId} />
        </div >
    );
};

export default App;