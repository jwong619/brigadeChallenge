import React from 'react';
import Task from './Task.jsx';
import './TodoList.css';
import StatsBar from './StatsBar.jsx'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      todos: [],
      term: '',
      totalTasks: 0,
      completedTasks: 0
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
          term: '',
          totalTasks: prevState.totalTasks + 1
        };
      });
      console.log('added/updated todos ---', this.state.todos);
      console.log(this.state.totalTasks);
    }
    e.preventDefault();
  }

  // delete task feature
  deleteTask() {
    // need to find item in ist
    // and remove it
    this.setState({

    })
  }

  // crossOutTask


  render() {
    return (
      <div id="list">


        <form onSubmit={this.addTask}>
          <input type="text" placeholder="What needs to be done?" value={this.state.term} onChange={this.onChange} />
        </form>

        <StatsBar todos={this.state.todos} totalTasks={this.state.totalTasks} completedTasks={this.state.completedTasks}/>

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








