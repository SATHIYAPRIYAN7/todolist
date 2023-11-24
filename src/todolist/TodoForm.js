// TodoForm.js
import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoForm = () => {
  const { dispatch } = useTodoContext();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.random(), // Replace with a proper ID generation method
        description: newTodo,
        // Additional properties like due date, priority, notes, etc.
      },
    });
    setNewTodo('');
  };

  return (
    <div>
      <input className='border-2 w-80 h-8 border-gray-400 mr-1 pl-2'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className=' bg-blue-500 px-4 py-1 text-white font-semibold' onClick={handleAddTodo}>ADD</button>
    </div>
  );
};

export default TodoForm;
