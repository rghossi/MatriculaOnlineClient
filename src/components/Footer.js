import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Equipe</h5>
              <p className="grey-text text-lighten-4">Dioginis, Gabriel e Rafael</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a target="_blank" className="grey-text text-lighten-3" href="https://github.com/rghossi/MatriculaOnlineClient">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2017 Copyright Text
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;