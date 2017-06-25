import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

class CadastroAluno extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      matricula: "",
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      email: "",
      cpf: ""
    }
  }

  createNewStudent(e) {
    const { matricula, nome, sobrenome, dataNascimento, email, cpf } = this.state
    e.preventDefault()
    this.setState({isLoading: true})
    axios.post('https://mo-api.herokuapp.com/api/aluno', {
      matricula, nome, sobrenome, dataNascimento, email, senha: cpf
    })
    .then((res) => {
      this.setState({
        isLoading: false,
        matricula: "",
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        email: "",
        cpf: ""
      });
      alert("Aluno cadastrado com sucesso!")
    })
    .catch((error) => {
      this.setState({isLoading: false})
      alert(error);
    });
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  validate(){
    const { matricula, nome, sobrenome, dataNascimento, email, cpf } = this.state
    return matricula &&
      nome &&
      sobrenome &&
      dataNascimento &&
      email &&
      cpf
  }

  render() {
    const { matricula, nome, sobrenome, dataNascimento, email, cpf } = this.state
    return (
      <div className="container">
          <div className="section">
              <h3 className="center indigo-text darken-4">Cadastrar Novo Aluno</h3>
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
                      <input id="last_name" type="text" value={sobrenome} name="sobrenome" onChange={(e) => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="matricula">Matrícula</label>
                      <input id="matricula" type="text" value={matricula} name="matricula" onChange={(e) => this.handleInputChange(e)} />
                    </div>
                    <div className="col s12 m4">
                      <label>Data de nascimento</label>
                      <input type="date" className="datepicker" value={dataNascimento} name="dataNascimento" onChange={(e) => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col col s4 offset-s2">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="validate" value={email} name="email" onChange={(e) => this.handleInputChange(e)} />
                    </div>

                    <div className="col s12 m4">
                      <label htmlFor="cpf">CPF</label>
                      <input id="cpf" type="text" value={cpf} name="cpf" onChange={(e) => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col col s6">
                      <div className="section right-align">
                        <a className="waves-effect waves-light btn-large indigo center-align" onClick={(e) => this.createNewStudent(e)} disabled={!this.validate()}>Cadastrar</a>
                      </div>
                    </div>
                    <div className="col col s6">
                      <div className="section left-align">
                        <a className="waves-effect waves-light btn-large indigo" onClick={() => browserHistory.push('/admin/cadastros-inicial')}>Cancelar</a>
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

export default CadastroAluno;