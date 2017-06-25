import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class InclusaoExclusao extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center indigo-text darken-4">Inclusão e exclusão de matrícula</h3>
        <br />

        <div className="card-panel borda">
        	<h4 className="indigo-text darken-4">Incluir disciplinas</h4>

        	<table className="bordered">
	          <thead>
	            <tr>
	                <th className="tam-nome">Matéria</th>
	                <th className="">Horário 1</th>
	                <th className="">Horário 2</th>
	                <th className="tam-creditos"></th>
	            </tr>
	          </thead>

	          <tbody>
	            <tr>
	              <td>Cálculo 2</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn green accent-4">Incluir</a>
	              </td>
	            </tr>
	            <tr>
	              <td>Inglês 2</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn green accent-4">Incluir</a>
	              </td>
	            </tr>
	            <tr>
	              <td>Física 1</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn green accent-4">Incluir</a>
	              </td>
	            </tr>
	          </tbody>
	        </table>
        </div>

        <br />

        <div className="card-panel borda">
        	<h4 className="indigo-text darken-4">Excluir disciplinas</h4>

        	<table className="bordered">
	          <thead>
	            <tr>
	                <th className="tam-nome">Matéria</th>
	                <th className="">Horário 1</th>
	                <th className="">Horário 2</th>
	                <th className="tam-creditos"></th>
	            </tr>
	          </thead>

	          <tbody>
	            <tr>
	              <td>Cálculo 2</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn red">Excluir</a>
	              </td>
	            </tr>
	            <tr>
	              <td>Inglês 2</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn red">Excluir</a>
	              </td>
	            </tr>
	            <tr>
	              <td>Física 1</td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	                Segunda
	                <p>10:00 - 12:00</p>
	              </td>
	              <td>
	              	<a className="waves-effect waves-light btn red">Excluir</a>
	              </td>
	            </tr>
	          </tbody>
	        </table>
        </div>

        <br />

        <div className="row">
          <div className="col col s6">
            <div className="section right-align">
              <a className="waves-effect waves-light btn-large indigo center-align">Salvar Edição</a>
            </div>
          </div>
          <div className="col col s6">
            <div className="section left-align">
              <a className="waves-effect waves-light btn-large indigo" onClick={() => browserHistory.push('/inclusao-exclusao-inicial')}>Cancelar</a>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default InclusaoExclusao;