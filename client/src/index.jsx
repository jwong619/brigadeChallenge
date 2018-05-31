import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1> todos </h1>
          <div className="container">
            <TodoList />
          </div>
      </div>

      );
  }
}


ReactDOM.render(<App />,
  document.getElementById("app"));