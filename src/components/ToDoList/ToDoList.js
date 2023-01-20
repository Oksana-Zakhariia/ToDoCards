import { ToDo } from 'components/ToDo/ToDo';
import { ToDoItem } from './ToDoList.styled';

export const ToDoList = ({ todos, onDeleteToDo, onToggleChange }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <ToDoItem key={id}>
        <ToDo
          text={text}
          completed={completed}
          onToggleChange={() => onToggleChange(id)}
          onDeleteToDo={() => onDeleteToDo(id)}
        />
      </ToDoItem>
    ))}
  </ul>
);
