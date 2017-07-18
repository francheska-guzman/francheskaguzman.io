import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<img className="slide-size" src={this.props.image[0]} />)
  }
}

export default Slideshow;