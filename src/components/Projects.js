import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Credit Report",
      description: "A financial technology application that calculates the six credit factors based on user’s financial information contained in the Credit Report API.",
      instructions: "Type 1 or 2 in the provided input field, to get user's information.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "PostgreSQL"],
      live: "https://francheska-guzman.github.io/credit-report",
      code: "https://github.com/francheska-guzman/credit-report",
      api: "https://creditreportapi.herokuapp.com",
      slideshow: ["./images/credit-report/1.png", "", ""]
    }
    this.project = this.project.bind(this);
    this.description = this.description.bind(this);
    this.instructions = this.instructions.bind(this);
    this.technologies = this.technologies.bind(this);
    this.list = this.list.bind(this);
    this.live = this.live.bind(this);
    this.code = this.code.bind(this);
    this.api = this.api.bind(this);
    this.slideshow = this.slideshow.bind(this);
  }

  project(title, description, instructions, technologies, live, code, api, slideshow) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      live: live,
      code: code,
      api: api,
      slideshow: slideshow
    });
  }

  /* Render title if no empty. */

  description() {
    if(this.state.description !== null) { return( <h5>Description</h5> ) };
  }

  instructions() {
    if(this.state.instructions !== null) { return( <h5>Instructions</h5> ) };
  }

  technologies() {
    if(this.state.technologies[0] !== null) { return( <h5>Technologies Used</h5> ) };
  }

  /* Creating a dynamic list of technologies used. */

  list() {
    return (this.state.technologies.map(function(technology, t) { 
      return ( <li className="project" key={t + 1}>{technology}</li> ) })
    )
  }
 
  /* Render links. */

  code() {
    if(this.state.code !== null) {
      return ( <a className="project-buttons" href={this.state.code} target="_blank"><img className="project-icon" src="./images/logo/github-black.png" alt="GitHub" /></a> );
    }
  }

  live() {
    if(this.state.live !== null) {
      return ( <a className="project-buttons" href={this.state.live} target="_blank"><img className="project-icon" src="./images/logo/link.png" alt="Live" /></a> );
    }
  }

  api() {
    if(this.state.api !== null) {
      return ( <a className="project-buttons" href={this.state.api} target="_blank"><img className="project-icon" src="./images/logo/api.png" alt="API" /></a> );
    }
  }

  /* Pictures for each project. */

  slideshow() {
    if(this.state.slideshow[0] !== null) {
      return ( 
        <div className="center-align">
        <img className="slide-size" alt={this.state.title} src={this.state.slideshow[0]} />
        </div>
      )
    }
  }

  render() {
    return (
      <div id="projects">
        <div>
          <h3> Projects </h3>
          <p className="paragraph">
          Take a look at some of my most precious and non-hidden treasures. Keep in mind that the Node.js applications are hosted in Heroku, and may take time to render.
          If you are looking for more treasures, <Link to="/mini-projects">press here</Link>.
          </p>
          <Data project={this.project} state={this.state} />
        </div>

        {/* Title, Buttons */}
        <div id="details">
          <h4>{this.state.title}</h4>
        </div>

        {/* Description, Instructions, Technologies Used */}
        <div className="flex-row">
          <div className='flex-1'> {this.slideshow()} </div>
          <div className="flex-1 project-information">
            {this.description()}
            <p>{this.state.description}</p>
            <div className='flex-row'>
              <div className='flex-1'> 
                {this.instructions()}
                <p>{this.state.instructions}</p> 
              </div>
              <div className='flex-1 project-information'> 
                {this.technologies()} 
                {this.list()} 
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="links-wrapper">
          {this.code()} {this.live()} {this.api()} 
        </div>
      </div>
    );
  }
}

export default Projects;