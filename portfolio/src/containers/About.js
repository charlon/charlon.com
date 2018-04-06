import React from 'react'
import '../styles/About.css'

const About = () => (

  <div>

    <header className="about-me">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Me</h1>
              <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet risus congue, iaculis magna ac, volutpat ipsum. Integer bibendum tortor eget nunc tristique, eget porta leo consequat. Sed volutpat tincidunt lectus at ultrices. Suspendisse ornare libero metus, vel vestibulum tellus suscipit nec. Nam pellentesque lacus vitae hendrerit rhoncus. Cras quis augue ac magna iaculis faucibus vitae nec dolor. Fusce ac placerat massa. Proin semper elit eget nulla vulputate, porta accumsan metus posuere.</p>

            <p>Curabitur volutpat ex id ultricies iaculis. Donec elementum finibus nibh in ornare. Suspendisse dictum placerat ullamcorper. Mauris eleifend eleifend maximus. Donec eu neque tristique nunc porttitor hendrerit id eu est. Praesent vulputate lectus at enim vehicula tincidunt. Nullam purus neque, luctus ut semper porta, dignissim ut lacus. Morbi ac ante velit. Maecenas non felis vitae dui dignissim varius sit amet non ligula. Praesent placerat elit in dui tempor elementum. Nulla lacinia magna sed eros consectetur malesuada.</p>

            <ul>
              <li><a href="/portfolio" className="btn btn-secondary my-2">view portfolio</a></li>
              <li><a href="/resume" className="btn btn-secondary my-2">view my resume</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>

)


export default About
