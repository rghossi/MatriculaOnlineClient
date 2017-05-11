import React, { Component } from 'react';
import uenf from '../uenf.png';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <a href="#" className="brand-logo"><img src={uenf} alt="logo" /></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;