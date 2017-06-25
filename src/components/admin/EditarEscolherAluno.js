import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditarEscolherAluno extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Escolha o Aluno</h3>
              <br />
              <div className="card-panel borda">
              <label for="turma">Turma</label>
              <select>
                <option value="" disabled selected></option>
                <option value="1">Turma 1</option>
                <option value="2">Turma 2</option>
                <option value="3">Turma 3</option>
              </select>

              <br />
              <br />

              <label for="aluno">Aluno</label>
              <select>
                <option value="" disabled selected></option>
                <option value="1">Aluno 1</option>
                <option value="2">Aluno 2</option>
                <option value="3">Aluno 3</option>
              </select>

                  <br />
                  <br />

                  <div className="row">
                    <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Editar</a></div>
                  </div>


              </div>
          </div>
      </div>
    );
  }
}

export default EditarEscolherAluno;