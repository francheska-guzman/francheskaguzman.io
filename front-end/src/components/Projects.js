import React, { Component } from 'react';
import Project from './Project';

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

  slideshow() {
    return(<img className="slide-size" src={this.state.slideshow[0]} />)
  }

  render() {
    return (
      <div id='projects' className='flex-col'>
        <h3>Projects</h3>
        <h4>{this.state.title}</h4>
        <div className='flex-row'>
          <div className="flex-2">
            {this.slideshow()}
          </div>
          <div className="flex-1">
            <a className="live-code" href={this.state.url_live} target="_blank">LIVE</a>
            <a className="live-code" href={this.state.url_code} target="_blank">CODE</a>
          </div>
        </div>
        <Project project={this.project} />
      </div>
    );
  }
}

export default Projects;