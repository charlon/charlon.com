import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel pellentesque nibh, eu euismod mi. In sit amet libero sapien. Fusce erat sapien, egestas fermentum blandit in, luctus in est. Cras a pellentesque urna, at pharetra justo. <Link to="/about">more about me</Link></p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel pellentesque nibh, eu euismod mi. In sit amet libero sapien. Fusce erat sapien, egestas fermentum blandit in, luctus in est. Cras a pellentesque urna, at pharetra justo. Vivamus rhoncus diam nisi, at suscipit tellus iaculis sed. Morbi iaculis magna ac augue aliquam faucibus. Donec hendrerit lacus arcu, quis sagittis nunc semper tincidunt. Maecenas viverra laoreet aliquam. Nam fringilla, ex at pretium ultricies, mi nisi pharetra nulla, ut aliquam neque nisi sit amet leo. Ut scelerisque sem lacinia, bibendum dolor et, pretium velit.</p>
  </div>
);

const Portfolio = ({ match }) => (
  <div>
    <h2>Portfolio</h2>
    <ul>
      <li><Link to={`${match.url}/myplan`}>myplan</Link></li>
      <li><Link to={`${match.url}/scout`}>scout</Link></li>
      <li><Link to={`${match.url}/myuw`}>myuw</Link></li>
      <li><Link to={`${match.url}/sqlshare`}>sqlshare</Link></li>
    </ul>

    <Route path={`${match.url}/:projectId`} component={Project} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a project.</h3>}
    />
  </div>
);

const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
    <p>asdfafds</p>
  </div>
);

export default App;
