import React from 'react'
import './Home.css'

function handleClick(e) {
    //e.preventDefault();
    console.log('The link was clicked.');
}

const Home = () => (
  <div>

    <header id="who" className="home-about">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Charlon Palacay</h2>
              <p className="lead">Currently working in Seattle, Washington.</p>
              <p><a href="/about" className="btn btn-outline-light">more about me</a></p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="what" className="home-portfolio">
      <div className="content">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h2>User Experience Designer</h2>
              <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
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
                  <h3>Design</h3>
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

            <div className="col-md-8">
              <a href="/portfolio" className="btn btn-outline-light">view my portfolio</a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="where" className="home-uw">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">

              <h2 className="">University of Washington</h2>
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
