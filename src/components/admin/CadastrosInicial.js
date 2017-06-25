import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CadastrosInicial extends Component {
  render() {
    return (
      <div className="container">
        <div className="descendo">
          <div id="card-panel-type" className="section">
              <h3 className="center indigo-text darken-4">Cadastros</h3>
              <div className="row">
                  <div className="row">

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Matéria</b></span>
                            <p>Cadastrar uma nova matéria.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/cadastro-materia')}>Cadastrar</a></div>
                          </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Professor</b></span>
                            <p>Cadastrar um novo professor.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn indigo cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/cadastro-professor')}>Cadastrar</a></div>
                          </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Aluno</b></span>
                            <p>Cadastrar um novo aluno.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn indigo cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/cadastro-aluno')}>Cadastrar</a></div>
                          </div>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CadastrosInicial;