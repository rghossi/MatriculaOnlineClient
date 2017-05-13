import React, { Component } from 'react';

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
          <li><a href="#!"><i className="material-icons">cloud</i>Meu Perfil</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Menu</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Pré Matrícula</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Inclusão/Exclusão</a></li>
          <li><a className="waves-effect indigo-text" href="/grade">Grade Curricular</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Plano de Estudos</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Quebra de Requisito</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Extrato</a></li>
          <li><a className="waves-effect indigo-text" href="#!">Declaração de Matrícula</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNav;