import React from 'react';
import Task from './Task.jsx';
import './TodoList.css';
import StatsBar from './StatsBar.jsx'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.state = {
      todos: [],
      term: '',
      totalTasksCount: 0,
      completedTasksCount: 0
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
      var newTask = [{name: this.state.term, completed: false}];


      this.setState((prevState) => {

        // console.log('adding, todos ---', this.state.todos);
        // console.log(this.state.totalTasksCount)


        var currentTodos = prevState.todos;
        console.log('test', currentTodos);
        currentTodos = currentTodos.concat(newTask);

        for (var i = 0; i < currentTodos.length; i++) {
          var name = currentTodos[i].name;
          var rank = name.split(',')[1];
          currentTodos[i]['rank'] = Number(rank);
        }


        currentTodos = currentTodos.sort( (a, b) => {
          if (a.rank > b.rank) {
            return 1;
          } else {
            return -1;
          }
        });

        // this.setState({
        //   todos: currentTodos
        // })


        return {
          todos: currentTodos,
          term: '',
          totalTasksCount: prevState.totalTasksCount + 1
        };



      });





    }
    e.preventDefault();





  }

  // delete task feature
  deleteTask(id) {
    var currentList = this.state.todos;
    var deleted = currentList.splice(id,1);
    console.log('deleted', deleted);
    this.setState((prevState) => {
      return {
        todos: currentList,
        totalTasks: prevState.totalTasksCount - 1
      }
    });

  }

  // crossOutTask, update completed
  completeTask(id) {
    console.log('mark as completed');
    var currentList = this.state.todos;
    for (var i = 0; i < currentList; i++) {
      if (id === i) {
        currentList[i].completed = true;
      }
    }

    this.setState((prevState) => {
      return {
        todos: currentList,
        completedTasksCount : prevState.completedTasksCount + 1
      }
    });

    console.log(this.state.todos);

  }



  render() {

    return (
      <div id="list">


        <form onSubmit={this.addTask}>
          <input type="text" placeholder="What needs to be done?" value={this.state.term} onChange={this.onChange} />
        </form>

        <StatsBar todos={this.state.todos} totalTasksCount={this.state.totalTasksCount} completedTasksCount={this.state.completedTasksCount}/>

        <ul>
        {this.state.todos.map((task, ind) => {
          return <Task key={ind} task={task} id={ind} deleteItem={this.deleteTask} completeTask={this.completeTask}/>
        })}
        </ul>


      </div>
      );
  }
}

export default TodoList;








