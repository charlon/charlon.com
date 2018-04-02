import React from 'react'
import './Home.css'

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

const Home = () => (
  <div>

    <header class="bg-light home-me">
      <div class="home-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="">Charlon Palacay</h1>
              <p class="lead text-muted">Product Designer + Front-end Developer</p>
              <ul>
                <li><a href="#who" onClick={handleClick} class="btn btn-outline-secondary">who</a></li>
                <li><a href="#what" onClick={handleClick} class="btn btn-outline-secondary">what</a></li>
                <li><a href="#where" onClick={handleClick} class="btn btn-outline-secondary">where</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="who" class="">
      <div class="home-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Who Am I</h2>
              <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
              <p><a href="/about" class="btn btn-outline-secondary">more about me</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="what" class="bg-light">
      <div class="home-content">
        <div class="container">
          <div class="row">

            <div class="col-md-12">
              <h2>What I do</h2>
              <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </div>

            {/* hide on mobile only */}
            <div class="col-md-3 d-none d-sm-block">
              <div class="card mb-3 box-shadow">
                <div class="card-body">
                  <h3>Research</h3>
                  <p class="card-text">Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-none d-sm-block">
              <div class="card mb-3 box-shadow">
                <div class="card-body">
                  <h3>UX Design</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-none d-sm-block">
              <div class="card mb-3 box-shadow">
                <div class="card-body">
                  <h3>Product Management</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div class="col-md-3 d-none d-sm-block">
              <div class="card mb-3 box-shadow">
                <div class="card-body">
                  <h3>Front-end Develop</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <a href="/portfolio" class="btn btn-outline-secondary">view my portfolio</a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="where" class="home-uw">
      <div class="home-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h2 class="">Where I work</h2>
              <p class="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
              <p><a href="/resume" class="btn btn-outline-light">view my resume</a></p>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default Home
