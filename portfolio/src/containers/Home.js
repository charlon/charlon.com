import React from 'react'
import '../styles/Home.css'

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
            <div className="col-md-6 ooops">
              <h1 className="sr-only">Charlon Palacay</h1>
              <p className="lead">Hello! I'm <strong>Charlon Palacay</strong>, a product designer and front-end developer from Seattle, Washington. I have a passion for creating and designing positive user experiences.</p>
              <p><a href="/portfolio" className="btn btn-outline-secondary">view portfolio</a></p>
            </div>
            <div className="col-md-6 blah">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="what" className="home-portfolio bg-light">
      <div className="content">
        <div className="container">
          <div className="row">

            <div className="offset-md-2 col-md-8 text-center">
              <h2>Product Designer</h2>
              <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </div>

            <div class="w-100 mb-5"></div>

            {/* hide on mobile only */}
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>User Research</h3>
                  <p className="card-text">Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Content Strategy</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Visual Design</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-none d-sm-block">
              <div className="card mb-3 box-shadow">
                <div className="card-body">
                  <h3>Front-end Development</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="offset-md-2 col-md-8 text-center">
              <a href="/cpalacay-resume.pdf" className="btn btn-outline-secondary">download resume</a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="where" className="home-featured">
      <div className="content">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h2 className="">Featured Work</h2>
              <p className="lead">I've worked in higher-education over the past 8 years improving the student academic experience by designing thoughtful and simple interfaces. Meet Scout!</p>
              <p><a href="/portfolio/scout" className="btn btn-outline-secondary">read case study</a></p>
            </div>

            <div className="col-md-12">
              <div className="text-center"><img className="" src="/scout-screenshot.png" alt="Card cap" /></div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
)

export default Home
