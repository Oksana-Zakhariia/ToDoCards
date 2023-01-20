import { Dropdown } from '../Dropdown/Dropdown';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Component } from 'react';
import { ToDoEditor } from 'components/ToDoEditor/ToDoEditor';
import { Filter } from 'components/Filter/Filter';
import shortid from 'shortid';
const initialTodos = [
  { id: 'id - 1', text: 'Finish my React course', completed: false },
  { id: 'id - 2', text: 'Finish my IT course', completed: false },
  { id: 'id - 3', text: 'Find a job', completed: false },
  { id: 'id - 4', text: 'Go to the sea', completed: false },
];

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    const parsedToDos = JSON.parse(todos);
    console.log(parsedToDos);
    if (parsedToDos) {
      this.setState({ todos: parsedToDos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    console.log('update');
  }
  addToDo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };
  deleteToDo = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== toDoId),
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleToDos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };
  getcompletedToDoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };
  toggleCompletedToDo = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === toDoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos, filter } = this.state;
    const completedToDos = this.getcompletedToDoCount();
    const visibleToDos = this.getVisibleToDos();

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
        <ToDoEditor onSubmit={this.addToDo}></ToDoEditor>
        <Filter value={filter} onChange={this.changeFilter}></Filter>

        <ToDoList
          todos={visibleToDos}
          onDeleteToDo={this.deleteToDo}
          onToggleChange={this.toggleCompletedToDo}
        ></ToDoList>
      </div>
    );
  }
}
