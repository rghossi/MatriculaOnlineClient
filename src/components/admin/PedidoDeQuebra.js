import React, { Component } from 'react';
import axios from 'axios';

class PedidoDeQuebra extends Component {
    constructor() {
    super();
    this.state = {
      quebras: [],
      isLoading: false
    }
  }

  fetchQuebras() {
    this.setState({isLoading: true})
    axios.get('https://mo-api.herokuapp.com/api/quebra')
    .then((res) => {
      this.setState({quebras: res.data.objects, isLoading: false});
    })
    .catch((error) => {
      this.setState({isLoading: false})
      alert(error);
    });
  }

  componentDidMount() {
    this.fetchQuebras();
  }

  acceptQuebra(e, q) {
    e.preventDefault();
    // axios.put('https://mo-api.herokuapp.com/api/quebra', {
    //   status: "Aceito",
    //   "q": {
    //     "filters": [{
    //       "aluno_matricula": q.aluno_matricula, "disciplina_codigo": q.disciplina_codigo
    //     }]
    //   }
    // })
    // .then((res) => {
    //   this.fetchQuebras();
    // })
    // .catch((error) => {
    //   alert(error);
    // });
  }

  rejectQuebra(e, q) {
    e.preventDefault();
    // if (confirm("Tem certeza?")){
    //   axios.put('https://mo-api.herokuapp.com/api/quebra', {
    //     "q": {
    //       "filters": [{
    //         "aluno_matricula": q.aluno_matricula, "disciplina_codigo": q.disciplina_codigo
    //       }]
    //     }
    //   })
    //   .then((res) => {
    //     this.fetchQuebras();
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    // }
  }

  render() {
    const { quebras, isLoading } = this.state
    return (
      <div>
        <div className="container">
          {isLoading && <p className="center-align">Carregando requisitos...</p>}
          <h3 className="center indigo-text darken-4">Pedidos de Quebra</h3>
          {quebras && quebras.map((q) => {
            const cssClass = q.status === "Aceito" ? "green collection-item" : "collection-item";
            return (
              <div className="collection" key={q.aluno.matricula+q.disciplina.codigo}>
                <div className={cssClass}>

                  <div className="row">
                    <div className="col s4">
                      <p><b>Aluno:</b> {q.aluno.nome + " " + q.aluno.sobrenome}</p>
                      <p><b>Disciplina:</b> {q.disciplina.nome}</p>
                      <p><b>Status:</b> {q.status}</p>
                    </div>

                    <div className="col s8">
                      <p><b>Motivo:</b> {q.message} </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s2 offset-s4">
                        <a className="waves-effect waves-light btn green accent-4 white-text" onClick={(e) => this.acceptQuebra(e, q)}>Permitir</a>
                    </div>

                    <div className="col s2">
                        <a className="waves-effect waves-light btn red white-text" onClick={(e) => this.rejectQuebra(e, q)}>Recusar</a>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default PedidoDeQuebra;