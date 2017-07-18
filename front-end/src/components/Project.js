import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);
    this.project1 = this.project1.bind(this);
    this.project2 = this.project2.bind(this);
    this.project3 = this.project3.bind(this);
  }

  project1() {
    this.props.project(
      "Credit Report", 
      "A financial technology application that calculates the six credit factors and credit score based on user’s financial information contained in my own API.",
      [],
      ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL", <a href="https://creditreportapi.herokuapp.com/" target="_blank">Credit Report API</a>],
      "https://francheska-guzman.github.io/credit-report/",
      "https://github.com/francheska-guzman/credit-report/",
      ["./images/project1/1.png", "./images/project1/2.png", "./images/project1/3.png"]
    )
  }

  project2() {
  	this.props.project(
  		"Connect Four", 
      null,
      [],
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/connect-four/",
      "https://github.com/francheska-guzman/connect-four/",
  		["./images/project2/1.png", "./images/project2/2.png", "./images/project2/3.png"]
  	)
  }

  project3() {
    this.props.project(
      "Stock Market", 
      null,
      [],
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/stock-market/",
      "https://github.com/francheska-guzman/stock-market/",
      ["./images/project3/1.png", "./images/project3/2.png", "./images/project3/3.png"]
    )
  }

  render() {
    return (
      <div className="flex-1 center">
        <input className="select-project" type="button" value="Credit Report" onClick={this.project1} />
        <input className="select-project" type="button" value="Connect Four" onClick={this.project2} />
        <input className="select-project" type="button" value="Stock Market" onClick={this.project3} />
      </div>
    );
  }
}

export default Project;