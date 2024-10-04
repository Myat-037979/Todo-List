/* eslint-disable no-restricted-globals */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ tasks, deleteTask, updateTask }) => {

    const handledelete = (id) => {
        if (confirm("Are you sure!")) {
            deleteTask(id);
        }
    }

    return (
        <div className="container mt-5">
            <div className="list-group">
                {
                tasks.map((task) => (
                    <div key={task.id} className={`list-group-item d-flex justify-content-between align-items-center w-100 mt-3 shadow-sm ${task.complete ? 'bg-success text-decoration-line-through text-white' : 'bg-danger text-white'}`}>
                        <div className="d-flex align-items-center">
                            <input 
                                type="checkbox" 
                                className='form-check-input me-2' 
                                onChange={() => updateTask(task.id, !task.complete)} 
                                checked={task.complete}
                            />
                            <span>{task.task}</span>
                        </div>
                        <div>
                            <i className='fa-solid fa-xmark cursor-pointer' onClick={() => handledelete(task.id)}></i>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Cart;
