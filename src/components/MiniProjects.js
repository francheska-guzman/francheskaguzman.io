import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

class MiniProjects extends Component {
  render() {
    return (
      <div>
      <Home />
      <div id="mini-projects">
        <h3> Mini Projects </h3>
        <p>The eighth note <span className="eighth-note">&#x266A;</span> means that the project contains audio effect.</p>

        <div className="mini-projects-center space-20">
          <div className="flex-row">
            <div className="space-1 flex-1">
              <span className="p-title flex-1">Velvet <span className="eighth-note">&#x266A;</span></span>
              <a className="p1 flex-1" href="https://francheska-guzman.github.io/velvet" target="_black">
                  <img className="slide-size" alt="Velvet" src="./images/velvet/1.png" />
              </a>
            </div>
            <div className="space-2 flex-1">
              <span className="p-title flex-1">Haunted House <span className="eighth-note">&#x266A;</span></span>
              <a className="p2 flex-1" href="https://francheska-guzman.github.io/haunted-house/" target="_black">
                  <img className="slide-size" alt="Francheska's Haunted House" src="./images/haunted-house/1.png" />
              </a>
            </div>
            <div className="space-3 flex-1">
              <span className="p-title flex-1">Rio <span className="eighth-note">&#x266A;</span></span>
              <a className="p3 flex-1" href="https://francheska-guzman.github.io/rio/" target="_black">
                  <img className="slide-size" alt="Rio" src="./images/rio/1.png" />
              </a>
            </div>
          </div>
          <div className="flex-row">
            <div className="space-1 flex-1">
              <span className="p-title flex-1">The Secret Life of Math <span className="eighth-note">&#x266A;</span></span>
              <a className="p1 flex-1" href="https://francheska-guzman.github.io/the-secret-life-of-math/" target="_black">
                  <img className="slide-size" alt="The Secret Life of Math" src="./images/the-secret-life-of-math/1.png" />
              </a>
            </div>
            <div className="space-2 flex-1">
              <span className="p-title flex-1">Weather Forecast</span>
              <a className="p2 flex-1" href="https://francheska-guzman.github.io/weather-forecast/" target="_black">
                  <img className="slide-size" alt="Weather" src="./images/weather/1.png" />
              </a>
            </div>
            <div className="space-3 flex-1">
              <span className="p-title flex-1">Tic Tac Toe</span>
              <a className="p3 flex-1" href="https://francheska-guzman.github.io/tic-tac-toe/" target="_black">
                  <img className="slide-size" alt="Tic Tac Toe" src="./images/tic-tac-toe/1.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="go-back">
          <Link className="back" to="/">❮ Go Back</Link>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default MiniProjects;