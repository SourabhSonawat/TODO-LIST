import React, { useState } from 'react';
import './TaskCreate.css';

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [enteredTaskIsValid, setEnteredTaskIsValid] = useState(false);
    const [enteredTaskTouched, setEnteredTaskTouched] = useState(false);



    const handleChange = (event) => {
        setTitle(event.target.value)

        if (event.target.value.trim() !== '') {
            setEnteredTaskIsValid(true)

        }
    }


    const nameInputBlurHandler = (event) => {
        setEnteredTaskTouched(true);

        if (title.trim() === '') {
            setEnteredTaskIsValid(false)

        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setEnteredTaskTouched(true)
        if (title.trim() === '') {
            setEnteredTaskIsValid(false)
            return;
        }
        setEnteredTaskIsValid(true);
        onCreate(title)
        setTitle('');
    }









    const TaskInputIsValid = !enteredTaskIsValid && enteredTaskTouched;
    const nameInputClasses = TaskInputIsValid ? 'input invalid' : 'input ';



    return (
        <div className='create-title'>
            <h1 className='heading' >To-Do-List</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className={nameInputClasses} >

                    <input type="text" value={title} placeholder='Write Task' onBlur={nameInputBlurHandler} onChange={handleChange} className='input' />
                    <button className='button'> Add a task</button>
                    {TaskInputIsValid && <p className='error-text ' > Task must not be empty</p>}
                </div>
            </form>

        </div>

    );
};

export default TaskCreate;