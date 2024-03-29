import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, browserHistory } from 'react-router';
import Landing from './scripts/components/LandingPage/index.jsx';
import Main from './scripts/components/LandingPage/Main.jsx';
import Dashboard from './scripts/components/Dashboard/index.jsx';

require('./styles/styles.css');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
), document.getElementById('content'));
