import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div id="App">
          <button type="button" className="btn btn-default" id="b1"> <Link to="/main"> Enter </Link> </button>
      </div>
    );
  }
}

export default App;
