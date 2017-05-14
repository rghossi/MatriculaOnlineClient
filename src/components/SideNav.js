import React, { Component } from 'react';
import {Link} from "react-router";

class SideNav extends Component {
  render() {
    return (
      <div className="user-side-nav">
        <ul id="slide-out" className="side-nav fixed">
          <li><div className="userView">
            <div className="background">
              <img src="http://materializecss.com/images/office.jpg" alt="office" />
            </div>
            <a href="#!user"><img className="circle" src="http://materializecss.com/images/yuna.jpg" alt="user" /></a>
            <a href="#!name"><span className="white-text name">John Doe</span></a>
            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">account_circle</i>Meu Perfil</a></li>
          <li><div className="divider"></div></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Menu</a></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Pré Matrícula</a></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Inclusão/Exclusão</a></li>
          <li><Link className="waves-effect indigo-text darken-4" to="/grade" >Grade Curricular</Link></li>
          <li><Link className="waves-effect indigo-text darken-4" to="/planodeestudos">Plano de Estudos</Link></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Quebra de Requisito</a></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Extrato</a></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Declaração de Matrícula</a></li>
          <li><a className="waves-effect indigo-text darken-4" href="#!">Contate-nos</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNav;