import React from 'react'
import { Switch, Route } from "react-router-dom"

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
