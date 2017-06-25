import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CadastroAluno extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Cadastrar Novo Aluno</h3>
              <br />
              <div className="card-panel borda">
                <form className="col s12">

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="first_name">Nome</label>
                      <input id="first_name" type="text" />
                    </div>
                    <div className="col s12 m4">
                      <label htmlFor="last_name">Sobrenome</label>
                      <input id="last_name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="matricula">Matrícula</label>
                      <input id="matricula" type="text" />
                    </div>
                    <div className="col s12 m4">
                      <label>Data de nascimento</label>
                      <input type="date" className="datepicker" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="validate" />
                    </div>

                    <div className="col s12 m4">
                      <label htmlFor="cpf">CPF</label>
                      <input id="cpf" type="text" />
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

export default CadastroAluno;