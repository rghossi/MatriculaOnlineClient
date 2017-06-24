import React, { Component } from 'react';
import logoUenf from './imagens/logoUenf.png';
import { browserHistory } from 'react-router';

class HeaderAdmin extends Component {
  render() {
    return (
        <nav className="nav-extended indigo darken-4">
            <div className="nav-wrapper">
              <a className="brand-logo"><img id="logotipouenf" style={{width: '150px'}} src={logoUenf} alt="logo" /></a>
              <a href="#" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#" className="amber-text text-lighten-2">About</a></li>
              </ul>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">

                <li className="tab"><a onClick={() => browserHistory.push('admin')}>Notificações</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('inclusao-exclusao')}>Cadastros</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('grade')}>Editar Sistema</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('plano-estudos')}>Quebra de pré-requisitos</a></li>
              </ul>
            </div>
        </nav>
    );
  }
}

export default HeaderAdmin;