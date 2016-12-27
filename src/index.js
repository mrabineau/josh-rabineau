import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main.js';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/main" component={Main} />
  </Router>
), document.getElementById('root'));
