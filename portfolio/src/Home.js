import React from 'react'
import './Home.css';

const Home = () => (
  <div>

    <section class="jumbotron text-center bg-light home-me">
      <div class="container">
        <h1 class="jumbotron-heading">Charlon Palacay</h1>
        <p class="lead text-muted">UX Designer + Front-end Developer</p>
      </div>
    </section>

    <section class="jumbotron text-center">
      <div class="container">
        <h2 class="jumbotron-heading">Who Am I</h2>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p><a href="/about" class="btn btn-primary my-2">more about me</a></p>
      </div>
    </section>

    <section class="jumbotron text-center bg-light">
      <div class="container">
        <div class="row">

          <h2 class="col-md-12 jumbotron-heading">What I do</h2>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

          <div class="col-md-6">
            <div class="card mb-6 box-shadow">
              <div class="card-body">
                <h3>Research</h3>
                <p class="card-text">Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-6 box-shadow">
              <div class="card-body">
                <h3>UX Design</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-6 box-shadow">
              <div class="card-body">
                <h3>Product Management</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card mb-6 box-shadow">
              <div class="card-body">
                <h3>Front-end Develop</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <a href="/portfolio" class="btn btn-secondary my-2">view portfolio</a>
          </div>

        </div>
      </div>

    </section>

    <section class="jumbotron text-center home-uw">
      <div class="container">
        <h2 class="jumbotron-heading">Where I work</h2>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="/resume" class="btn btn-primary my-2">view my resume</a>

        </p>
      </div>
    </section>

  </div>
)

export default Home
