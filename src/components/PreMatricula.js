import React, { Component } from 'react';

class PreMatricula extends Component {
  render() {
    return (
      <div className="container">
        <div className="section"></div>
        <h4 className="center-align indigo-text darken-4">Matérias disponíveis</h4>

        <ul className="collection">
          <li className="collection-item">
            <span className="title"><b>Calculo 1</b></span>
            <p>Segunda 8:00 - 10:00 <br />
            Quarta 8:00 - 10:00</p>

            <a className="secondary-content"><a className="waves-effect waves-light btn-large indigo">Escolher</a></a>
          </li>
          <li className="collection-item avatar">
            <span className="title">Title</span>

            <a className="secondary-content"><a className="waves-effect waves-light btn-large indigo">Concluir Pré-Matrícula</a></a>
          </li>
          <li className="collection-item avatar">
            <span className="title">Title</span>

            <a className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
          <li className="collection-item avatar">
            <span className="title">Title</span>

            <a className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
          <li className="collection-item"><div><span className="title"><b>Calculo 1</b></span>
            <p>Segunda 8:00 - 10:00 <br />
            Quarta 8:00 - 10:00</p>
            <a className="secondary-content"><a className="waves-effect waves-light btn indigo">Escolher</a></a></div></li>
        </ul>



        <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Concluir Pré-Matrícula</a></div>



      </div>
    );
  }
}

export default PreMatricula;