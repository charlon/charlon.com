import React from 'react'
import './Home.css'

function handleClick(e) {
    //e.preventDefault();
    console.log('The link was clicked.');
}

const Home = () => (
  <div>

    <header className="bg-light home-me">
      <div className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">Charlon Palacay</h1>
              <p className="lead text-muted">Product Designer + Front-end Developer</p>
              <ul>
                <li><a href="#who" onClick={handleClick} className="btn btn-outline-secondary">who</a></li>
                <li><a href="#what" onClick={handleClick} className="btn btn-outline-secondary">what</a></li>
                <li><a href="#where" onClick={handleClick} className="btn btn-outline-secondary">where</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="who" className="">
      <div className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Who Am I</h2>
              <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
              <p><a href="/about" className="btn btn-outline-secondary">more about me</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="what" className="bg-light">
      <div className="home-content">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h2>What I do</h2>
              <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </div>

            {/* hide on mobile only */}
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Research</h3>
                  <p className="card-text">Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>UX Design</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Product Management</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Front-end Develop</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <a href="/portfolio" className="btn btn-outline-secondary">view my portfolio</a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="where" className="home-uw">
      <div className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h2 className="">Where I work</h2>
              <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
              <p><a href="/resume" className="btn btn-outline-light">view my resume</a></p>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default Home
