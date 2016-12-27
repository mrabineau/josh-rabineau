import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div id="App">
          <a id="button1"> <Link to="/main"> Enter </Link> </a>
      </div>
    );
  }
}

export default App;
