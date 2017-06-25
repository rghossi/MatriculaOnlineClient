import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class InclusaoExclusaoInicial extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="center indigo-text darken-4">Inclusão/Exclusão</h3>
          <p className="center-align">Nesta seção, você pode selecionar as matérias que deseja incluir ou excluir no período. Todas as alterações poderão ser feitas até o útimo dia do prazo de inclusão e exclusão de matérias. Ao encerrar o prazo, as matérias inclusas serão definitivas para todo o período. </p>
          <div className="section"></div>
        </div>

        <div className="grey lighten-2">
          <div className="row">
            <div className="col s4 offset-s2">
              <div className="section"></div>
              <h4 className="center-align indigo-text">Status</h4>
              <p className="center-align">Prazo de inclusão e exclusão aberto.</p>
              <div className="section"></div>
            </div>

            <div className="col s4">
              <div className="section"></div>
              <h4 className="center-align indigo-text">Iniciar seção</h4>
              <p className="center-align"><a className="waves-effect waves-light btn indigo" onClick={() => browserHistory.push('inclusao-exclusao')}><b>Incluir/Excluir</b></a></p>
              <div className="section"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default InclusaoExclusaoInicial;