import React from 'react'

const Portfolio = () => (

  <div>

    <header className="">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">Portfolio</h1>
              <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src="http://via.placeholder.com/225x100" alt="Card cap" />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="/portfolio/myplan" className="btn btn-sm btn-outline-secondary">View MyPlan</a>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src="http://via.placeholder.com/225x100" alt="Card cap" />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="/portfolio/scout" className="btn btn-sm btn-outline-secondary">View Scout</a>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src="http://via.placeholder.com/225x100" alt="Card cap" />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src="http://via.placeholder.com/225x100" alt="Card cap" />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <ul>
              <li><a href="/cpalacay-resume.pdf" className="btn btn-secondary my-2">download resume</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>



  </div>

)


export default Portfolio
