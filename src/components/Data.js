import React, { Component } from 'react';

class Data extends Component {
  constructor(props){
    super(props);
    this.project1 = this.project1.bind(this);
    this.project2 = this.project2.bind(this);
    this.project3 = this.project3.bind(this);
    this.project4 = this.project4.bind(this);
  }

  project1() {
    this.props.project(
      "Credit Report", 
      "A financial technology application that calculates the six credit factors based on user’s financial information contained in the Credit Report API.",
      "Type 1 or 2 in the provided input field, to get user's information.",
      ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "PostgreSQL"],
      "https://francheska-guzman.github.io/credit-report",
      "https://github.com/francheska-guzman/credit-report",
      "https://creditreportapi.herokuapp.com",
      ["./images/credit-report/1.png", "", ""]
    );
  }

  project2() {
    this.props.project(
      "Stock Market", 
      "The front-end of a financial web application focused on the Stock Market.",
      "Enter any username and password to access the Stock Market homepage.",
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/stock-market",
      "https://github.com/francheska-guzman/stock-market",
      null,
      ["./images/stock-market/1.png", "./images/stock-market/2.png", "./images/stock-market/3.png"]
    );
  }

  project3() {
  	this.props.project(
  	  "Connect Four", 
      "The classic board game Connect Four, is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      'Refer to "How to Play" link located at the top of the board.',
      ["HTML", "CSS", "JavaScript"],
      "https://francheska-guzman.github.io/connect-four",
      "https://github.com/francheska-guzman/connect-four",
      null,
  		["./images/connect-four/1.png", "./images/connect-four/2.png", "./images/connect-four/3.png"]
  	);
  }

  project4(){
    this.props.project(
      "Movie Finder", 
      "A movie web application where users can find movie information, as well save, edit, or delete movies from Favorites list.",
      'Input a movie title, then press the "Search" button. To save a movie in Favorites list press "Add to Favorites". You will be able to edit the commment, as well delete the movie entry in Favorites.',
      ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
      "https://findermovie.herokuapp.com",
      "https://github.com/francheska-guzman/movie-finder",
      "https://themoviedb.org/documentation/api",
      ["./images/movie-finder/1.png", "./images/movie-finder/2.png", null]
    );
  }

  projects() {
    if(this.props.state.title === "Credit Report") {
      return (
        <div className="flexrow space-20">
          <div className="space-1 flex-1">
            <span className="p-title flex-1">Stock Market</span>
            <input className="p2 flex-1" type="button" onClick={this.project2} />
          </div>
          <div className="space-2 flex-1">
            <span className="p-title flex-1">Connect Four</span>
            <input className="p3 flex-1" type="button" onClick={this.project3} />
          </div>
          <div className="space-3 flex-1">
            <span className="p-title flex-1">Movie Finder</span>
            <input className="p4 flex-1" type="button" onClick={this.project4} />
          </div>
        </div>
      )
    }

    else if(this.props.state.title === "Stock Market") {
      return (
        <div className="flexrow space-20">
          <div className="space-1 flex-1">
            <span className="p-title flex-1">Connect Four</span>
            <input className="p3 flex-1" type="button" onClick={this.project3} />
          </div>
          <div className="space-2 flex-1">
            <span className="p-title flex-1">Movie Finder</span>
            <input className="p4 flex-1" type="button" onClick={this.project4} />
          </div>
          <div className="space-3 flex-1">
            <span className="p-title flex-1">Credit Report</span>
            <input className="p1 flex-1" type="button" onClick={this.project1} />
          </div>
        </div>
      )
    }

    else if(this.props.state.title === "Connect Four") {
      return (
        <div className="flexrow space-20">
          <div className="space-1 flex-1">
            <span className="p-title flex-1">Movie Finder</span>
            <input className="p4 flex-1" type="button" onClick={this.project4} />
          </div>
          <div className="space-2 flex-1">
            <span className="p-title flex-1">Credit Report</span>
            <input className="p1 flex-1" type="button" onClick={this.project1} />
          </div>
          <div className="space-3 flex-1">
            <span className="p-title flex-1">Stock Market</span>
            <input className="p2 flex-1" type="button" onClick={this.project2} />
          </div>
        </div>
      )
    }

    else {
      return (
        <div className="flexrow space-20">
          <div className="space-1 flex-1">
            <span className="p-title flex-1">Credit Report</span>
            <input className="p1 flex-1" type="button" onClick={this.project1} />
          </div>
          <div className="space-2 flex-1">
            <span className="p-title flex-1">Stock Market</span>
            <input className="p2 flex-1" type="button" onClick={this.project2} />
          </div>
          <div className="space-3 flex-1">
            <span className="p-title flex-1">Connect Four</span>
            <input className="p3 flex-1" type="button" onClick={this.project3} />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.projects()}</div>
    );
  }
}

export default Data;