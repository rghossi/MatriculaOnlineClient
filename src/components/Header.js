import React, { Component } from 'react';
import logoUenf from './imagens/logoUenf.png';
import { browserHistory } from 'react-router';

class Header extends Component {
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

                <li className="tab"><a onClick={() => browserHistory.push('')}>Home</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('pre-matricula-inicial')}>Pré-Matrícula</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('inclusao-exclusao-inicial')}>Inclusão/Exclusão</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('grade')}>Grade Curricular</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('plano-estudos')}>Plano de estudos</a></li>
                <li className="tab"><a onClick={() => browserHistory.push('quebra-requisitos')}>Quebra de requisito</a></li>
              </ul>
            </div>
        </nav>
    );
  }
}

export default Header;