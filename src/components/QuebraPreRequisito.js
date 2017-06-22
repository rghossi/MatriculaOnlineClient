import React, { Component } from 'react';
import axios from 'axios';

class QuebraPreRequisito extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      disciplinas: [],
      message: '',
      selectedCourseId: ''
    }
  }

  componentDidMount() {
    axios.post('https://mo-api.herokuapp.com/api/disciplinas-disponiveis-para-quebra-de-requisito', { 
      matricula: localStorage.getItem('mAluno')
    })
    .then((res) => {
      this.setState({loading: false, disciplinas: res.data.disciplinas});
    })
    .catch((error) => {
      alert(error);
      this.setState({loading: false});
    });
  }

  sendRequest(e){
    e.preventDefault();
    axios.post('https://mo-api.herokuapp.com/api/quebra', { 
      aluno_matricula: localStorage.getItem('mAluno'),
      disciplina_codigo: this.state.selectedCourseId,
      message: this.state.message
    })
    .then((res) => {
      alert("Requisição enviada com sucesso!");
      this.setState({message: '', selectedCourseId: ''});
    })
    .catch((error) => {
      alert(error);
      console.log(error);
      this.setState({loading: false});
    });
  }

  handleTextArea(e){
    this.setState({message: e.target.value});
  }

  handleSelectChange(e) {
    this.setState({selectedCourseId: e.target.value});
  }


  validateForm() {
    const { message, selectedCourseId } = this.state
    return selectedCourseId && message
  }

  render() {
    const { loading, disciplinas, message, selectedCourseId } = this.state
    return (
      <div className="container">
        <div className="section"></div>
        <h4 className="center-align indigo-text darken-4">Quebra de Pré-Requisito</h4>

          <br />
          <br />

          <label>Escolha a matéria que deseja pedir a quebra de Pré-Requisito</label>
         <select value={selectedCourseId} onChange={(e) => this.handleSelectChange(e)}>
          {loading && <option value="" disabled>Carregando disciplinas...</option>}
          {!loading && <option value="" disabled>Escolha a disciplina</option>}
          {disciplinas && disciplinas.map((d) => {
            return <option value={d.codigo} key={d.codigo}>{d.nome}</option>
          })}
         </select>

         <br />
         <br />

         <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea value={message} onChange={(e) => this.handleTextArea(e)} id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Descreva os motivos para o pedido de quebra de Pré-Requisito:</label>
                </div>
              </div>
            </form>
          </div>


          <div className="section center-align"><a className="waves-effect waves-light btn-large indigo" onClick={(e) => this.sendRequest(e)} disabled={!this.validateForm()}>Enviar pedido</a></div>

      </div>
    );
  }
}

export default QuebraPreRequisito;