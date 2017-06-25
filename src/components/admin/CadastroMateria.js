import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CadastroMateria extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Cadastrar Nova Matéria</h3>
              <br />
              <div className="card-panel borda">
                <form className="col s12">

                  <div className="row">
                    <div className="col col s8 offset-s2">
                      <label for="first_name">Nome da matéria</label>
                      <input id="first_name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label for="first_name">Código</label>
                      <input id="first_name" type="text" />
                    </div>

                    <div className="col s12 m4">
                      <label for="first_name">Semestre</label>
                      <input id="first_name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label>Professor</label>
                      <select>
                        <option value="" disabled selected></option>
                        <option value="1">Anabel Tamariz</option>
                        <option value="2">Ausberto Castro</option>
                        <option value="3">Fermin Tang</option>
                        <option value="4">Luiz Rivera</option>
                      </select>
                    </div>

                    <div className="col s12 m4">
                      <label>Créditos</label>
                      <select>
                        <option value="" disabled selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </div>

                  <br />

                  <div className="row">
                    <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Cadastrar Matéria</a></div>
                  </div>

              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default CadastroMateria;