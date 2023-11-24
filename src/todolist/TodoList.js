// TodoList.js
import React from 'react';
import { useTodoContext } from './TodoContext';
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  return (
    <div>
      <ul>
        {state.todos.map((todo) => (
            <div className='flex justify-between w-96 mt-2 border-2 border-black text-lg rounded-md'>
          <li className='pl-2 py-3'   key={todo.id}>
            {todo.description}
            
            {/* Additional buttons for update, email reminder, etc. */}
          </li>
          <button className='pr-2' onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
            <MdDelete className='text-2xl' />
            </button>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
