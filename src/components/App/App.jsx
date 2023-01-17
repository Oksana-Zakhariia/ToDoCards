import { Dropdown } from '../Dropdown/Dropdown';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Component } from 'react';
const initialTodos = [
  { id: 'id - 1', text: 'Finish my React course', completed: false },
  { id: 'id - 2', text: 'Finish my IT course', completed: false },
  { id: 'id - 3', text: 'Find a job', completed: false },
  { id: 'id - 4', text: 'Go to the sea', completed: false },
];

export class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteToDo = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== toDoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedToDos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <div
        style={{
          height: '100vh',

          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Dropdown></Dropdown>
        <div>
          <h2> Statistic</h2>

          <div>
            <p> Total ToDos : {todos.length} </p>
          </div>
          <div>
            <p> Completed ToDos : {completedToDos}</p>
          </div>
        </div>
        <ToDoList todos={todos} onDeleteToDo={this.deleteToDo}></ToDoList>
      </div>
    );
  }
}
