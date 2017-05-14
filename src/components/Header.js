import React, { Component } from 'react';
import logoUenf from './imagens/logoUenf.png';

class Header extends Component {
  render() {
    return (
      <nav className="indigo darken-4">
        <div className="nav-wrapper">
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <a href="#" className="brand-logo"><img style={{width: '150px'}} src={logoUenf} alt="logo" /></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/" className="amber-text lighten-2">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;