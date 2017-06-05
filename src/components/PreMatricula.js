import React, { Component } from 'react';
import grade1 from './imagens/grade1.png';

class PreMatricula extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="center indigo-text darken-4">Pré Matrícula</h3>
          <p className="center-align">Nesta seção, você pode selecionar as matérias que deseja cursar no período. Todas as alterações poderão ser feitas até o útimo dia do prazo da pré-matrícula. Ao encerrar o prazo, as alterações no plano de estudos só poderão ser feitas na seção de inclusão e exclusão de disciplinas, dentro do praso selecionado. </p>
          <div className="section"></div>
        </div>

        <div className="grey lighten-2">
          <div className="row">
            <div className="col s4 offset-s2">
              <div className="section"></div>
              <h4 className="center-align indigo-text">Status</h4>
              <p className="center-align">Pré-Matrícula ainda não realizada</p>
              <div className="section"></div>
            </div>

            <div className="col s4">
              <div className="section"></div>
              <h4 className="center-align indigo-text">Iniciar seção</h4>
              <p className="center-align"><a className="waves-effect waves-light btn indigo"><b>Pré-Matrícula</b></a></p>
              <div className="section"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PreMatricula;