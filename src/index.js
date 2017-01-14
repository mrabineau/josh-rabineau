import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main.js';
import Welcome from './components/Welcome.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/main" component={Main} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />

  </Router>
), document.getElementById('root'));
