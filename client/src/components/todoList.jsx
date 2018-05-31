import React from 'react';
import Task from './Task.jsx';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      todos: [],
      term: ''
    }
  }

  // onChange update entered task
  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  // addTask
  addTask(e) {
    if (this.state.term !== '') {
      var newTask = [this.state.term];
      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat(newTask),
          term: ''
        };
      });
      console.log('added/updated todos ---', this.state.todos);
    }
    e.preventDefault();
  }

  // delete task feature
  deleteTask() {

  }

  // crossOutTask

  // show total todo count
    //

  // show remaining todo count
    // if crossed out

  render() {
    return (
      <div id="list">


        <form onSubmit={this.addTask}>
          <input type="text" placeholder="What needs to be done?" value={this.state.term} onChange={this.onChange} />
        </form>


        <ul>
        {this.state.todos.map((task, ind) => {
          return <Task key={ind} task={task} id={ind}/>
        })}
        </ul>


      </div>
      );
  }
}

export default TodoList;








