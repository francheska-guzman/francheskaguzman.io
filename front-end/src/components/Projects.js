import React, { Component } from 'react';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      slideshow: [],
      description: null,
      live: null,
      code: null
    }
  this.projects = this.projects.bind(this);
  }

  projects() {

  }

  render() {
    return (
      <div id='projects' className='flex-col'>
        <h3>Projects</h3>
        <div className="flex-2"></div>
        <div className="flex-1">
      	<h4>{this.state.title}</h4>
        </div>
      </div>
    );
  }
}

export default Projects;