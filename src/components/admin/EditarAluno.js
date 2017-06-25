import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

class EditarAluno extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      aluno: {}
    }
  }

  editStudent(e) {
    const { matricula, nome, sobrenome, dataNascimento, email } = this.state.aluno
    e.preventDefault()
    this.setState({isLoading: true})
    axios.put('https://mo-api.herokuapp.com/api/aluno/'+matricula, {
      matricula, nome, sobrenome, dataNascimento, email
    })
    .then((res) => {
      this.setState({isLoading: false})
      alert("Aluno editado com sucesso!")
        browserHistory.goBack()
    })
    .catch((error) => {
      this.setState({isLoading: false})
      alert(error);
    });
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://mo-api.herokuapp.com/api/aluno/'+this.props.params.matricula)
    .then((res) => {
      this.setState({loading: false, aluno: res.data});
    })
    .catch((error) => {
      alert(error);
      this.setState({loading: false});
    });
  }

  handleInputChange(e) {
    const aluno = Object.assign(this.state.aluno);
    aluno[e.target.name] = e.target.value;
    this.setState({aluno})
  }

  render() {
    const { matricula, nome, sobrenome, dataNascimento, email } = this.state.aluno
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Editar Aluno</h3>
              <br />
              <div className="card-panel borda">
                <form className="col s12">

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="nome">Nome</label>
                      <input id="nome" type="text" value={nome} name="nome" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className="col s12 m4">
                      <label htmlFor="sobrenome">Sobrenome</label>
                      <input id="sobrenome" type="text" value={sobrenome} name="sobrenome" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="matricula">Matrícula</label>
                      <input id="matricula" type="text" value={matricula} name="matricula" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className="col s12 m4">
                      <label htmlFor="date">Data de nascimento</label>
                      <input type="date" className="datepicker" value={dataNascimento} name="dataNascimento" onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="validate" value={email} name="email" onChange={(e) => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col col s6">
                      <div className="section right-align">
                        <a className="waves-effect waves-light btn-large indigo center-align" onClick={(e) => this.editStudent(e)}>Salvar Edição</a>
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

export default EditarAluno;