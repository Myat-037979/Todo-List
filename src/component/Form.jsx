import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ addTask }) => {
    const [userTask, setUserTask] = useState('');

    const formSubmitHandling = () => {
        if (userTask.trim()) {
            addTask(userTask);
            setUserTask('');
        }
    }

    return (
        <div className="container mt-5">
            <h3 className='mb-4 text-center'>React Todo-List Project</h3>
            <div className="row g-3">
                <div className="col-md-8 offset-md-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Enter Tasks...'
                            value={userTask}
                            onChange={e => setUserTask(e.target.value)}
                        />
                        <button
                            type='button'
                            onClick={() => formSubmitHandling()}
                            className='btn btn-primary'
                        >
                            <i className='fa-solid fa-plus me-2'></i>
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
