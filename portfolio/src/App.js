import React from 'react'
import { Switch, Route } from "react-router-dom"

import Home from './containers/Home'
import About from './containers/About'
import Portfolio from './containers/Portfolio'

const App = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>

);

export default App;
