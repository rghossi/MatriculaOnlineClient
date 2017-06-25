import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditarEscolherAluno extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      alunos: [],
      alunoSelecionado: ''
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://mo-api.herokuapp.com/api/aluno')
    .then((res) => {
      this.setState({loading: false, alunos: res.data.objects});
    })
    .catch((error) => {
      alert(error);
      this.setState({loading: false});
    });
  }

  editStudent(e) {
    e.preventDefault()
    browserHistory.push('admin/editar-aluno/'+this.state.alunoSelecionado)
  }

  handleInputChange(e) {
    this.setState({alunoSelecionado: e.target.value})
  }

  renderStudents() {
    return this.state.alunos.map((aluno) => (
      <option key={aluno.matricula} value={aluno.matricula}>{aluno.nome + " " + aluno.sobrenome}</option>
    )) 
  }

  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Escolha o Aluno</h3>
              <br />
              <div className="card-panel borda">

              <label htmlFor="aluno">Aluno</label>
              <select onChange={(e) => this.handleInputChange(e)} value={this.state.alunoSelecionado}>
                <option value="" disabled>Escolha o aluno</option>
                { this.renderStudents() }
              </select>

                  <br />
                  <br />

                  <div className="row">
                    <div className="section center-align">
                      <a className="waves-effect waves-light btn-large indigo" 
                        disabled={!this.state.alunoSelecionado}
                        onClick={(e) => this.editStudent(e)}>
                          Editar
                      </a>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default EditarEscolherAluno;