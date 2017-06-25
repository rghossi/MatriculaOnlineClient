import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class TelaInicialAdmin extends Component {
  render() {
    return (
      <div className="container">
        <div className="descendo">
          <div id="card-panel-type" className="section">
              <h3 className="center indigo-text darken-4">Notificações</h3>
              <div className="row">
                  <div className="row">

                  <div className="col s12 m6">
                      <div className="card  indigo darken-4">
                        <div className="card-content white-text">
                          <span className="card-title cyan-text accent-1"><b>Pedido de Quebra de Pré-Requisito</b></span>
                          <p>Pedido de quebra de Pré-Requisito do Aluno Rafael Gossi</p>
                          <br />
                          <div className="section center-align"><a className="waves-effect waves-light btn cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/quebra-requisitos')}>Verificar</a></div>
                        </div>
                      </div>
                  </div>

                  <div className="col s12 m6">
                      <div className="card  indigo darken-4">
                        <div className="card-content white-text">
                          <span className="card-title cyan-text accent-1"><b>Pedido de Quebra de Pré-Requisito</b></span>
                          <p>Pedido de quebra de Pré-Requisito do Aluno Gabriel Fiorese</p>
                          <br />
                          <div className="section center-align"><a className="waves-effect waves-light btn indigo cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/quebra-requisitos')}>Verificar</a></div>
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

export default TelaInicialAdmin;