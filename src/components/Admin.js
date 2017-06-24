import React, { Component } from 'react';
import axios from 'axios';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';

class Admin extends Component {
    constructor() {
    super();
    this.state = {
      quebras: []
    }
  }

  fetchQuebras() {
    axios.get('https://mo-api.herokuapp.com/api/quebra')
    .then((res) => {
      this.setState({quebras: res.data.objects});
    })
    .catch((error) => {
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
    const { quebras } = this.state
    return (
      <div>
        <HeaderAdmin />
        <div className="container">
          <h3 className="center indigo-text darken-4">Pedidos de Quebra</h3>
          {quebras && quebras.map((q) => {
            const cssClass = q.status === "Aceito" ? "green collection-item" : "collection-item";
            return (
              <ul className="collection" key={q.aluno.matricula+q.disciplina.codigo}>
                <li className={cssClass}>
                  <p>Aluno: {q.aluno.nome + " " + q.aluno.sobrenome}</p>
                  <p>Disciplina: {q.disciplina.nome}</p>
                  <p>Status: {q.status}
                    <a href="" className="secondary-content" onClick={(e) => this.rejectQuebra(e, q)}>
                      <i className="material-icons reject-quebra">
                        phonelink_erase
                      </i>
                    </a>
                    <a href="" className="secondary-content" onClick={(e) => this.acceptQuebra(e, q)}>
                      <i className="material-icons">
                        done
                      </i>
                    </a>
                  </p>
                </li>
              </ul>
            )
          })}
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Admin;