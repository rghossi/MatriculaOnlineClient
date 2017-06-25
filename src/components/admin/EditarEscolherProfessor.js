import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditarEscolherProfessor extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      professors: [],
      professorSelecionado: ''
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://mo-api.herokuapp.com/api/professor')
    .then((res) => {
      this.setState({loading: false, professors: res.data.objects});
    })
    .catch((error) => {
      alert(error);
      this.setState({loading: false});
    });
  }

  editProfessor(e) {
    e.preventDefault()
    browserHistory.push('admin/editar-professor/'+this.state.professorSelecionado)
  }

  handleInputChange(e) {
    this.setState({professorSelecionado: e.target.value})
  }

  renderProfessors() {
    return this.state.professors.map((professor) => (
      <option key={professor.matricula} value={professor.matricula}>{professor.nome + " " + professor.sobrenome}</option>
    )) 
  }

  render() {
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Escolha o Professor</h3>
              <br />
              <div className="card-panel borda">
              <select onChange={(e) => this.handleInputChange(e)} value={this.state.professorSelecionado}>
                <option value="" disabled>Escolha o professor</option>
                { this.renderProfessors() }
              </select>

                  <br />
                  <br />

                  <div className="row">
                    <div className="section center-align"><a className="waves-effect waves-light btn-large indigo" disabled={!this.state.professorSelecionado} onClick={(e) => this.editProfessor(e)}>Editar</a></div>
                  </div>


              </div>
          </div>
      </div>
    );
  }
}

export default EditarEscolherProfessor;