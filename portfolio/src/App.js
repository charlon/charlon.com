import React, { Component } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>

);

const Home = () => (

<div>

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Welcome to my site...</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
      <p>
        <a href="/about" class="btn btn-primary my-2">more about me</a>

      </p>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">

        <h3 class="col-md-12">Featured work</h3>

        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="http://via.placeholder.com/225x100" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="http://via.placeholder.com/225x100" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="http://via.placeholder.com/225x100" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="http://via.placeholder.com/225x100" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <a href="/portfolio" class="btn btn-secondary my-2">view portfolio</a>
        </div>

      </div>
    </div>
  </div>

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
