import React, { Component } from 'react';
import Slideshow from './Slideshow';
import Data from './Data';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Credit Report",
      description: "A financial technology application that calculates the six credit factors based on user’s financial information contained in the Credit Report API.",
      instructions: "Type '1' or '2' to get user information in the provided input field, which is located in the navigation bar. The application calculate the results in base of the user information. Try using both numbers so you can see that both users have different results.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "PostgreSQL"],
      live: "https://francheska-guzman.github.io/credit-report",
      code: "https://github.com/francheska-guzman/credit-report",
      api: "https://creditreportapi.herokuapp.com",
      slideshow: ["./images/credit-report/1.png", "./images/credit-report/2.png", "./images/credit-report/3.png"]
    }
    this.project = this.project.bind(this);
    this.description = this.description.bind(this);
    this.instructions = this.instructions.bind(this);
    this.technologies = this.technologies.bind(this);
    this.list = this.list.bind(this);
    this.live = this.live.bind(this);
    this.code = this.code.bind(this);
    this.api = this.api.bind(this);
    this.buttons = this.buttons.bind(this);
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

  live() {
    if(this.state.live !== null) {
      return ( <a className="project-buttons" href={this.state.live} target="_blank">Live</a> );
    }
  }

  code() {
    if(this.state.code !== null) {
      return ( <a className="project-buttons" href={this.state.code} target="_blank">Code</a> );
    }
  }

  api() {
    if(this.state.api !== null) {
      return ( <a className="project-buttons" href={this.state.api} target="_blank">API</a> );
    }
  }

  buttons() {
    return ( <div className="right-and-center"> {this.live()} {this.code()} {this.api()} </div> );
  }

  /* Pictures for each project. */

  slideshow() {
    if(this.state.slideshow[0] === null) {
      console.log("This project doesn't have pictures.");
    }
    else {
      return ( <Slideshow title={this.state.title}
                          image={this.state.slideshow} /> );
    }
  }

  render() {
    return (
      <div id='projects'>
        <div>
          <h3> My Latest Work </h3>
          <p className="paragraph">Take a look at some of my most precious and non-hidden treasures. Keep in mind that my node.js applications are hosted in Heroku, and may takes time to be rendered.</p>
          <Data project={this.project} state={this.state} />
        </div>

        {/* Title, Buttons */}
        <div id="details">
          <h4>{this.state.title}</h4>
          {this.buttons()}  
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
      </div>
    );
  }
}

export default Projects;