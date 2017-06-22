import React, { Component } from 'react';

class PreMatricula extends Component {
  render() {
    return (
      <div className="container">
        <div className="section"></div>
        <h4 className="center-align indigo-text darken-4">Matérias disponíveis</h4>

        <br />
        <br />
        <table className="bordered">
          <thead>
            <tr>
                <th className="tam-checkbox"></th>
                <th className="tam-nome">Matéria</th>
                <th className="">Horário 1</th>
                <th className="">Horário 2</th>
                <th className="tam-creditos">Créditos</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked" />
                <label for="filled-in-box"></label>
              </td>
              <td>Cálculo 2</td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked" />
                <label for="filled-in-box"></label>
              </td>
              <td>Inglês 2</td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked" />
                <label for="filled-in-box"></label>
              </td>
              <td>Física 1</td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>
                Segunda
                <p>10:00 - 12:00</p>
              </td>
              <td>4</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />



        <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Concluir Pré-Matrícula</a></div>


      </div>
    );
  }
}

export default PreMatricula;