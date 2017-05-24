import React, { Component } from 'react';
import {Link} from "react-router";
import logoUenf from './imagens/logoUenf.png';

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
                <li className="tab"><a href="#">Pré-Matrícula</a></li>
                <li className="tab"><a href="#">Inclusão/Exclusão</a></li>
                <li className="tab"><a href="#">Grade Curricular</a></li>
                <li className="tab"><a><Link to="/grade" >Grade Curricularpp</Link></a></li>
                <li className="tab"><a href="#">Plano de estudos</a></li>
                <li className="tab"><a href="#">Quebra de requisito</a></li>
                <li className="tab"><a href="#">Extrato</a></li>
                <li className="tab"><a href="#">Contate-nos</a></li>
              </ul>
            </div>
        </nav>
    );
  }
}

export default Header;