import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { add, remove, toggleCompleted } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState('');

  const distpatch = useAppDispatch();

  const onSave = () => {
    distpatch(add(title));
    setTitle('');
  };

  const onDelete = (id: string) => {
    distpatch(remove(id));
  };

  const toggle = (id: string) => {
    distpatch(toggleCompleted(id));
  };
  return (
    <div className="App">
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => toggle(todo.id)}>
              {todo.completed ? 'Mark Not Completed' : 'Mark Completed'}
            </button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>

            <span> {todo.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
