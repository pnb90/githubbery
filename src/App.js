import React from 'react';
import './App.css';
import Home from './components/Home'
import AngularView from './components/AngularView'
import EmberView from './components/EmberView'
import ReactView from './components/ReactView'
import VueView from './components/VueView'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/angular" component={AngularView} />
      <Route path="/ember" component={EmberView} />
      <Route path="/react" component={ReactView} />
      <Route path="/vue" component={VueView} />
      <Route path="/watchers" component={Home} />
      <Route path="/commits" component={Home} />
      <Route path="/forks" component={Home} />
      <Route path="/votes" component={Home} />
    </Router>
  );
}

export default App;
