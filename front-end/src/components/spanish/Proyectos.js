import React, { Component } from 'react';
import Data from './Data';

class Proyectos extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Credit Report", 
      description: "Una aplicación financiera que calcula los seis factores de crédito basado en la información financiera del usuario localizada en el API de Credit Report.",
      instructions: 'Ingresa 1 ó 2 en el campo provisto, para desplegar la información del usuario.',
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "PostgreSQL"],
      live: "https://francheska-guzman.github.io/credit-report",
      code: "https://github.com/francheska-guzman/credit-report",
      api: "https://creditreportapi.herokuapp.com",
      slideshow: ["./images/credit-report/1.png", "", ""]
    }
    this.project = this.project.bind(this);
    this.description = this.description.bind(this);
    this.instructions = this.instructions.bind(this);
    this.technologies = this.technologies.bind(this);
    this.list = this.list.bind(this);
    this.live = this.live.bind(this);
    this.code = this.code.bind(this);
    this.api = this.api.bind(this);
    this.slideshow = this.slideshow.bind(this);
  }

  project(title, description, instructions, technologies, live, code, api, slideshow) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      live: live,
      code: code,
      api: api,
      slideshow: slideshow
    });
  }

  /* Render title if no empty. */

  description() {
    if(this.state.description !== null) { return( <h5>Descripción</h5> ) };
  }

  instructions() {
    if(this.state.instructions !== null) { return( <h5>Instrucciones</h5> ) };
  }

  technologies() {
    if(this.state.technologies[0] !== null) { return( <h5>Tecnologías Usadas</h5> ) };
  }

  /* Creating a dynamic list of technologies used. */

  list() {
    return (this.state.technologies.map(function(technology, t) { 
      return ( <li className="project" key={t + 1}>{technology}</li> ) })
    )
  }
 
  /* Render links. */

  live() {
    if(this.state.live !== null) {
      return ( <a className="project-buttons" href={this.state.live} target="_blank">En Vivo</a> );
    }
  }

  code() {
    if(this.state.code !== null) {
      return ( <a className="project-buttons" href={this.state.code} target="_blank">Código</a> );
    }
  }

  api() {
    if(this.state.api !== null) {
      return ( <a className="project-buttons" href={this.state.api} target="_blank">API</a> );
    }
  }

  /* Pictures for each project. */

  slideshow() {
    if(this.state.slideshow[0] !== null) {
      return ( 
        <div className="center-align">
        <img className="slide-size" alt={this.state.title} src={this.state.slideshow[0]} />
        </div>
      )
    }
  }

  render() {
    return (
      <div id='projects'>
        <div>
          <h3> Mis Últimos Proyectos </h3>
          <p className="paragraph">Échale un vistazo a algunos de mis más preciados y no tan ocultos tesoros. Ten en cuenta que las aplicaciones en Node.js estan alojadas en Heroku, y podría tomar tiempo en desplegar la información.</p>
          <Data project={this.project} state={this.state} />
        </div>

        {/* Title, Buttons */}
        <div id="details">
          <h4>{this.state.title}</h4>
        </div>

        {/* Description, Instructions, Technologies Used */}
        <div className="flex-row">
          <div className='flex-1'> {this.slideshow()} </div>
          <div className="flex-1 project-information">
            {this.description()}
            <p>{this.state.description}</p>
            <div className='flex-row'>
              <div className='flex-1'> 
                {this.instructions()}
                <p>{this.state.instructions}</p> 
              </div>
              <div className='flex-1 project-information'> 
                {this.technologies()} 
                {this.list()} 
              </div>
            </div>
          </div>
        </div>

        <div className="links-wrapper">
          <span className="decoration">|</span> 
            {this.live()} {this.code()} {this.api()} 
          <span className="decoration">|</span>
        </div>
      </div>
    );
  }
}

export default Proyectos;