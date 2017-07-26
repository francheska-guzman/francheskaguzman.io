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
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL", <a className="links" href="https://creditreportapi.herokuapp.com/" rel="noopener noreferrer" target="_blank">Credit Report API</a>],
      url_live: "https://francheska-guzman.github.io/credit-report/",
      url_code: "https://github.com/francheska-guzman/credit-report/",
      slideshow: ["./images/project1/1.png", "./images/project1/2.png", "./images/project1/3.png"]
    }
    this.project = this.project.bind(this);
    this.technologies = this.technologies.bind(this);
    this.slideshow = this.slideshow.bind(this);
  }

  project(title, description, instructions, technologies, url_live, url_code, slideshow) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      url_live: url_live,
      url_code: url_code,
      slideshow: slideshow
    });
  }

  technologies() {
    return (this.state.technologies.map(function(technology, t){
        return ( <li className="project" key={t + 1}>{technology}</li> )
      })
    )
  }

  slideshow() {
    return ( <Slideshow title={this.state.title}
                        image={this.state.slideshow} /> );
  }

  render() {
    return (
      <div id='projects'>
        <div>
          <h3>My Latest Work<br /><span className="sub-title">Take a look at some of my most precious treasures.</span></h3>
          <Data project={this.project} />
        </div>
        {/* Project Title and URL's */}
        <div id="details">
          <h4>{this.state.title}</h4>
          <h5 className="flex-1 link">
            <a className="link" href={this.state.url_live} target="_blank">Live</a>| 
            <a className="link" href={this.state.url_code} target="_blank">Code</a>
          </h5>
        </div>
        {/* Project Information */}
        <div className="flex-row">
          <div className='flex-1'> {this.slideshow()} </div>
          <div className="flex-1 project-information">
            <h5>Description:</h5>
            <p>{this.state.description}</p>
              <div className='flex-row'>
                <div className='flex-1'> <h5>Instructions:</h5><p>{this.state.instructions}</p> </div>
                <div className='flex-1 project-information'> <h5>Technologies Used:</h5>{this.technologies()} </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;