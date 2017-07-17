import React, { Component } from 'react';
import Project from './Project'

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Credit Report",
      description: null,
      technologies: null,
      instructions: null,
      url_live: "https://francheska-guzman.github.io/credit-report/",
      url_code: "https://github.com/francheska-guzman/credit-report/",
      slideshow: []
    }
    this.project = this.project.bind(this);
  }

  project(title, description, technologies, instructions, url_live, url_code, slideshow) {
    this.setState({
      title: title,
      description: description,
      technologies: technologies,
      instructions: instructions,
      url_live: url_live,
      url_code: url_code,
      slideshow: slideshow
    });
  }

  render() {
    return (
      <div id='projects' className='flex-col'>
        <h3>Projects</h3>
          <div className="flex-2"></div>
          <div className="flex-1">
      	  <h4>{this.state.title}</h4>
          <h5>{this.state.url_live}</h5>
          <h5>{this.state.url_code}</h5>
          </div>
          <Project project={this.project} />
      </div>
    );
  }
}

export default Projects;