import React, { Component } from 'react';
import Slideshow from './Slideshow';
import Data from './Data';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Credit Report",
      description: "A financial technology application that calculates the six credit factors and credit score based on user’s financial information contained in the Credit Report API.",
      instructions: "Type '1' or '2' to get user information in the provided input field, which is located in the navigation bar. The application calculate the results in base of the user information. Try using both numbers so you can see that both users have different results.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL"],
      url_live: "https://francheska-guzman.github.io/credit-report/",
      url_code: "https://github.com/francheska-guzman/credit-report/",
      url_api: "https://creditreportapi.herokuapp.com/",
      slideshow: ["./images/credit-report/1.png", "./images/credit-report/2.png", "./images/credit-report/3.png"]
    }
    this.project = this.project.bind(this);
    this.titleDescription = this.titleDescription.bind(this);
    this.titleInstructions = this.titleInstructions.bind(this);
    this.titleTechnologiesUsed = this.titleTechnologiesUsed.bind(this);
    this.technologies = this.technologies.bind(this);
    this.live = this.live.bind(this);
    this.code = this.code.bind(this);
    this.api = this.api.bind(this);
    this.buttons = this.buttons.bind(this);
    this.slideshow = this.slideshow.bind(this);
  }

  project(title, description, instructions, technologies, url_live, url_code, url_api, slideshow) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      url_live: url_live,
      url_code: url_code,
      url_api: url_api,
      slideshow: slideshow
    });
  }

  titleDescription() {
    if(this.state.description !== "") { return( <h5>Description</h5> ) }
  }

  titleInstructions() {
    if(this.state.instructions !== "") { return( <h5>Instructions</h5> ) }
  }

  titleTechnologiesUsed() {
    if(this.state.technologies[0] !== null) { return( <h5>Technologies Used</h5> ) }
  }

  technologies() {
    return (this.state.technologies.map(function(technology, t) { 
      return ( <li className="project" key={t + 1}>{technology}</li> ) })
    )
  }

  live() {
    if(this.state.url_live !== "") {
      return ( <a href={this.state.url_live} target="_blank"><img alt="Live" className="img-link" src="./images/logo/live.png" /></a> );
    }
  }

  code() {
    if(this.state.url_code !== "") {
      return ( <a href={this.state.url_code} target="_blank"><img alt="Code" className="img-link" src="./images/logo/code.png" /></a> );
    }
  }

  api() {
    if(this.state.url_api !== "") {
      return ( <a href={this.state.url_api} target="_blank"><img alt="API"  className="img-link"  src="./images/logo/api.png" /></a> );
    }
  }

  buttons() {
    return ( <div className="right-and-center"> {this.live()} {this.code()} {this.api()} </div> );
  }

  slideshow() {
    if(this.state.slideshow[0] === null) {
      console.log("This project does not have images.");
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
            {this.titleDescription()}
            <p>{this.state.description}</p>
            <div className='flex-row'>
              <div className='flex-1'> 
                {this.titleInstructions()}
                <p>{this.state.instructions}</p> 
              </div>
              <div className='flex-1 project-information'> 
                {this.titleTechnologiesUsed()} 
                {this.technologies()} 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;