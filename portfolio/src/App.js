import React, { Component } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'

const App = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>

);

export default App;
