import { ToDoItem } from './ToDoList.styled';

export const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <ToDoItem key={id}>
        <p>{text}</p>
        <button
          onClick={() => {
            onDeleteToDo(id);
          }}
        >
          Delete
        </button>
      </ToDoItem>
    ))}
  </ul>
);
