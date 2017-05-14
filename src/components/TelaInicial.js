import React, { Component } from 'react';

class TelaInicial extends Component {
  render() {
    return (
      <div>
        <div id="card-panel-type" className="section">
            <h3 className="center indigo-text darken-4">Notícias</h3>
            <div className="row">
                <div className="row">

                  <div className="col s12 m6">
                    <div className="card  indigo darken-4">
                      <div className="card-content white-text">
                        <span className="card-title cyan-text accent-1"><b>Card Title</b></span>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col s12 m6">
                    <div className="card  indigo darken-4">
                      <div className="card-content white-text">
                        <span className="card-title cyan-text accent-1"><b>Card Title</b></span>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default TelaInicial;