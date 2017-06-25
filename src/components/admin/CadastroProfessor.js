import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CadastroProfessor extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Cadastrar Novo Professor</h3>
              <br />
              <div className="card-panel borda">
                <form className="col s12">

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label for="first_name">Nome</label>
                      <input id="first_name" type="text" />
                    </div>
                    <div className="col s12 m4">
                      <label for="first_name">Sobrenome</label>
                      <input id="first_name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label for="first_name">Matrícula</label>
                      <input id="first_name" type="text" />
                    </div>
                    <div className="col s12 m4">
                      <label for="first_name">Senha</label>
                      <input id="first_name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s4">
                      <label for="email">Email</label>
                      <input id="email" type="email" className="validate" />
                    </div>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col col s6">
                      <div className="section right-align">
                        <a className="waves-effect waves-light btn-large indigo center-align">Cadastrar</a>
                      </div>
                    </div>
                    <div className="col col s6">
                      <div className="section left-align">
                        <a className="waves-effect waves-light btn-large indigo" onClick={() => browserHistory.push('/admin/cadastros-inicial')}>Cancelar</a>
                      </div>
                    </div>
                  </div>

              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default CadastroProfessor;