import React, { useState } from 'react';
import './Todocard.css';


const Todocard = ({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id)
    }



    return (
        <div className='card'>
            <div>
                {task.title}
            </div>


            <button className='btn' onClick={handleDelete}>Delete  </button>

        </div>
    );
};

export default Todocard;