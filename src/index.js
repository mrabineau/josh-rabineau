import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main.js';
import Collage from './components/Collage.js';
import Welcome from './components/Welcome.js'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/main" component={Main} />
    <Route path="/collage" component={Collage} />

  </Router>
), document.getElementById('root'));
