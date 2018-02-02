import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MiniProjects extends Component {
  render() {
    return (
      <div id="mini-projects">
        <h3> Mini Projects </h3>

        <p>Yey! You have found more treasures!</p>
        <br/>
        <p>The eighth note <span className="eighth-note">&#x266A;</span> means that the project contains audio effect. Not supported in Safari browser.</p>

        <div className="mini-projects-center">
          <div className="flexrow space-20">
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

          <div className="flexrow space-20">
            <div className="space-1 flex-1">
              <span className="p-title flex-1">The Secret Life of Math <span className="eighth-note">&#x266A;</span></span>
              <a className="p1 flex-1" href="https://francheska-guzman.github.io/the-secret-life-of-math/" target="_black">
                  <img className="slide-size" alt="The Secret Life of Math" src="./images/the-secret-life-of-math/1.png" />
              </a>
            </div>
            <div className="space-2 flex-1">
              <span className="p-title flex-1">Weather</span>
              <a className="p2 flex-1" href="https://francheska-guzman.github.io/weather/" target="_black">
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
          <NavLink className="back" to="/">❮ Go Back</NavLink>
        </div>
      </div>
    );
  }
}

export default MiniProjects;