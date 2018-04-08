import React from 'react'
import { Switch, Route } from "react-router-dom"

import Home from './containers/Home'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Scout from './containers/Scout'

const App = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/portfolio/scout" component={Scout} />
    </Switch>

);

export default App;
