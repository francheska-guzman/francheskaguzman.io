import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);
    this.creditreport = this.creditreport.bind(this);
    this.connectfour = this.connectfour.bind(this);
  }

  creditreport() {
    this.props.project(
      "Credit Report", 
      "Description",
      "Technologies",
      "Instructions",
      "https://francheska-guzman.github.io/credit-report/",
      "https://github.com/francheska-guzman/credit-report/",
      [null, null]
    )
  }

  connectfour() {
  	this.props.project(
  		"Connect Four", 
      "Description",
      "Technologies",
      "Instructions",
      "https://francheska-guzman.github.io/connect-four/",
      "https://github.com/francheska-guzman/connect-four/",
  		["./images/connectfour/1.png", "./images/connectfour/2.png", "./images/connectfour/3.png"]
  	)
  }

  render() {
    return (
      <div>
      <input type="button" value="Credit Report" onClick={this.creditreport} />
      <input type="button" value="Connect Four" onClick={this.connectfour} />
      </div>
    );
  }
}

export default Project;