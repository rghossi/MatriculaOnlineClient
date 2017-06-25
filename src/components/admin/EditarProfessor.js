import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditarProfessor extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      professor: {}
    }
  }

  editProfessor(e) {
    const { matricula, nome, sobrenome, email } = this.state.professor
    e.preventDefault()
    this.setState({isLoading: true})
    axios.put('https://mo-api.herokuapp.com/api/professor/'+this.props.params.matricula, {
      matricula: parseInt(matricula), nome, sobrenome, email
    })
    .then((res) => {
      alert("Professor editado com sucesso!")
      browserHistory.goBack()
    })
    .catch((error) => {
      this.setState({isLoading: false})
      alert(error);
    });
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://mo-api.herokuapp.com/api/professor/'+this.props.params.matricula)
    .then((res) => {
      this.setState({loading: false, professor: res.data});
    })
    .catch((error) => {
      alert(error);
      this.setState({loading: false});
    });
  }

  handleInputChange(e) {
    const professor = Object.assign(this.state.professor);
    professor[e.target.name] = e.target.value;
    this.setState({professor})
  }

  render() {
    const { matricula, nome, sobrenome, email } = this.state.professor
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Editar Professor</h3>
              <br />
              <div className="card-panel borda">
                <form className="col s12">

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="first_name">Nome</label>
                      <input id="first_name" type="text" value={nome} name="nome" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className="col s12 m4">
                      <label htmlFor="last_name">Sobrenome</label>
                      <input id="last_name" type="text" value={sobrenome} name="sobrenome" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="matricula">Matrícula</label>
                      <input id="matricula" type="number" value={matricula} name="matricula" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className="col col s12 m4">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="validate" value={email} name="email" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col col s6">
                      <div className="section right-align">
                        <a className="waves-effect waves-light btn-large indigo center-align" onClick={(e) => this.editProfessor(e)}>Salvar Edição</a>
                      </div>
                    </div>
                    <div className="col col s6">
                      <div className="section left-align">
                        <a className="waves-effect waves-light btn-large indigo" onClick={() => browserHistory.push('/admin/editar-inicial')}>Cancelar</a>
                      </div>
                    </div>
                  </div>

              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default EditarProfessor;