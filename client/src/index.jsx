import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1> my todos </h1>
        <TodoList />
      </div>

      );
  }
}


ReactDOM.render(<App />,
  document.getElementById("app"));