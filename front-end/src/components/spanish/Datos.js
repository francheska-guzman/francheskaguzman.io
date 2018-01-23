import React, { Component } from 'react';

class Datos extends Component {
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
      "Una aplicación financiera que calcula los seis factores de crédito basado en la información financiera del usuario localizada en el API de Credit Report.",
      'Ingresa 1 ó 2 en el campo provisto, para desplegar la información del usuario.',
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
      "Una aplicación financiera basada en la Bolsa de Valores.",
      "Ingresa cualquier nombre de usuario y contraseña para acceder a la página principal de Stock Market. Actualmente estoy trabajando en una versión dinámica y rediseñada utilizando Angular, llamada 'Brokerage' (corretaje). Esta nueva versión tendrá autenticación.",
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
      "El clásico juego de mesa Connect Four, es un juego de dos jugadores en el que se turnean cada vez que lanzan una ficha desde la parte superior de una rejilla compuesta de siete columnas y seis filas. Al caer las fichas, estas ocupan el próximo espacio disponible dentro de la columna. El objetivo del juego es ser el primero en formar una linea horizontal, vertical, o diagonal de cuatro fichas correspondientes al mismo jugador.",
      'Refiérase a "How To Play" localizado en la parte superior del juego.',
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
      "Una aplicación web de películas en cual los usuarios pueden encontrar información, así como guardar, editar, o borrar películas de la lista de favoritos.",
      'Ingresa el título de una película, y luego presiona el botón de "Search" (buscar). Para guardar una película en "Favorites" (la lista de favoritos), presiona "Add to Favorites" (añadir a la lista de favoritos). Tendrás acceso a editar el comentario, así como borrar las películas en "Favorites".',
      ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "Express.js", "PostgreSQL", <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">Third Party API</a>],
      "https://findermovie.herokuapp.com",
      "https://github.com/francheska-guzman/movie-finder",
      null,
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

export default Datos;