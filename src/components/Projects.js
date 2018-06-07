import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Connect Four",
      description: "The classic board game Connect Four, is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      instructions: 'Refer to "How to Play" link located at the top of the board.',
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://francheska-guzman.github.io/connect-four",
      code: "https://github.com/francheska-guzman/connect-four",
      api: null,
      slideshow: ["./images/connect-four/1.png", "./images/connect-four/2.png", "./images/connect-four/3.png"]
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