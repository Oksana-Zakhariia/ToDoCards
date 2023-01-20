import { DeleteButton, ToDoContent, ToDoInfo } from './ToDo.styled';

export const ToDo = ({ text, onDeleteToDo, onToggleChange, completed }) => (
  <ToDoContent>
    <ToDoInfo>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleChange}
      ></input>
      <p>{text}</p>
    </ToDoInfo>

    <DeleteButton type="button" onClick={onDeleteToDo}>
      Delete
    </DeleteButton>
  </ToDoContent>
);
