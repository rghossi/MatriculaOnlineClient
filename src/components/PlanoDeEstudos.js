import React, { Component } from 'react';
import grade1 from './imagens/grade1.png';

class PlanoDeEstudos extends Component {
  render() {
    return (
      <div>
        <h3 className="center indigo-text darken-4">Plano de Estudos</h3>
        <div className="row">
          <div className="col s12 m1 indigo-text darken-4"></div>
          <div className="col s12 m2 indigo-text darken-4">SEGUNDA</div>
          <div className="col s12 m2 indigo-text darken-4">TERÇA</div>
          <div className="col s12 m2 indigo-text darken-4">QUARTA</div>
          <div className="col s12 m2 indigo-text darken-4">QUINTA</div>
          <div className="col s12 m2 indigo-text darken-4">SEXTA</div>
        </div>
        <div className="divider"></div>

        <div className="row">
            <div className="card-panel teal" height="100" width="100">
              <span className="white-text">Programação 1</span>
          </div>

          <div className="col s3">
            <div className="card-panel teal">
              <span className="white-text">Programação 1</span>
            </div>
          </div>
          <div className="col s3">
            <div className="card-panel teal">
              <span className="white-text">Programação 1</span>
            </div>
          </div>
          <div className="col s3">
            <div className="card-panel teal">
              <span className="white-text">Programação 1</span>
            </div>
          </div>
          <div className="col s3">
            <div className="card-panel teal">
              <span className="white-text">Programação 1</span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PlanoDeEstudos;