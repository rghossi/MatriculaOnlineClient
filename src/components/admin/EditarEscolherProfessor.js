import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditarEscolherProfessor extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Escolha o Professor</h3>
              <br />
              <div className="card-panel borda">
              <select>
                <option value="" disabled selected></option>
                <option value="1">Professor 1</option>
                <option value="2">Professor 2</option>
                <option value="3">Professor 3</option>
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

export default EditarEscolherProfessor;