import React, { Component } from 'react';

class Data extends Component {
  constructor(props){
    super(props);
    this.project1 = this.project1.bind(this);
    this.project2 = this.project2.bind(this);
    this.project3 = this.project3.bind(this);
  }

  project1() {
    this.props.project(
      "Credit Report", 
      "A financial technology application that calculates the six credit factors and credit score based on user’s financial information contained in the Credit Report API.",
      "Type '1' or '2' to get user information in the provided input field, which is located in the navigation bar. The application calculate the results in base of the user information. Try using both numbers so you can see that both users have different results.",
      ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL", <a className="links" href="https://creditreportapi.herokuapp.com/" rel="noopener noreferrer" target="_blank">Credit Report API</a>],
      "https://francheska-guzman.github.io/credit-report/",
      "https://github.com/francheska-guzman/credit-report/",
      ["./images/credit-report/1.png", "./images/credit-report/2.png", "./images/credit-report/3.png"]
    );
  }

  project2() {
    this.props.project(
      "Stock Market", 
      "The front-end of a Financial Technology Web Application focused on the Stock Market.",
      "Enter any username and password to access the Stock Market homepage. I am currently working in a dynamic, redesigned project built in Angular.js, called 'Brokerage'. The new version will have authentication.",
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/stock-market/",
      "https://github.com/francheska-guzman/stock-market/",
      ["./images/stock-market/1.png", "./images/stock-market/2.png", "./images/stock-market/3.png"]
    );
  }

  project3() {
  	this.props.project(
  		"Connect Four", 
      "The classic board game Connect Four, is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      'Refer to "How to Play" link located at the top of the board.',
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/connect-four/",
      "https://github.com/francheska-guzman/connect-four/",
  		["./images/connect-four/1.png", "./images/connect-four/2.png", "./images/connect-four/3.png"]
  	);
  }

  render() {
    return (
      <div className="flexrow">
        <input className="p1 flex-1" type="button" value="Credit Report" onClick={this.project1} />
        <input className="p2 flex-1" type="button" value="Stock Market" onClick={this.project2} />
        <input className="p3 flex-1" type="button" value="Connect Four" onClick={this.project3} />
      </div>
    );
  }
}

export default Data;