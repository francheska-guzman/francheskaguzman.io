import React, { Component } from 'react';

class Contacto extends Component {
  render() {
    return (
      <div id='contacto'>
        <div className="flex-row">
          <div className="flex-2">
            <h3>Contacto</h3>
            <h5>¡Hagamos que las personas amen usar las aplicaciones aún más!</h5>
            <br/>
            <h6>Francheska Guzmán</h6>
            <h6>Correo Electrónico: gffrancheska@gmail.com</h6>
            <h6>Teléfono: 787-410-9414</h6>
          </div>
          <div className="flex-1 resume">
            <a className="resume-link" href="https://francheska-guzman.github.io" rel="noopener noreferrer" target="_blank">Resumé</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;