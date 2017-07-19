import React, { Component } from 'react';

class Slideshow extends Component {
  render() {
    return (
	  <img className="slide-size" alt={this.props.title} src={this.props.image[0]} />
	)
  }
}

export default Slideshow;