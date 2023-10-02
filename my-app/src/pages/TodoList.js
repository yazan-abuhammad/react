import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: '',
      });
    }
  };

  removeTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Add a new task"
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
