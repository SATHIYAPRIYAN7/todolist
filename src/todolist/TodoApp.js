// TodoApp.js
import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoSearch from './TodoSearch';

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className='flex max-w-md flex-col m-auto max-h-screen justify-center  items-center'>
        <h1 className='mt-20 text-3xl font-bold mb-5'>Todo Application</h1>
        <TodoForm />
        <TodoSearch/>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
