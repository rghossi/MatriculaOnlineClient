import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditarEscolherMateria extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Escolha a Matéria</h3>
              <br />
              <div className="card-panel borda">
              <select>
                <option value="" disabled selected></option>
                <option value="1">Materia 1</option>
                <option value="2">Materia 2</option>
                <option value="3">Materia 3</option>
              </select>

                  <br />
                  <br />

                  <div className="row">
                    <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Editar</a></div>
                  </div>


              </div>
          </div>
      </div>
    );
  }
}

export default EditarEscolherMateria;