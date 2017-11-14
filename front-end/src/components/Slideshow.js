import React, { Component } from 'react';
// import { Fade } from 'react-slideshow-image';

class Slideshow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return ( 
      // <Fade 
      //   images={this.props.image}
      //   duration="5000"
      //   transitionDuration="1000"
      // />
      <img className="slide-size" alt={this.props.title} src={this.props.image[0]} />
    )
  }
}

export default Slideshow;