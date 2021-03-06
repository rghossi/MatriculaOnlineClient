import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditarInicial extends Component {
  render() {
    return (
      <div className="container">
        <div className="descendo">
          <div id="card-panel-type" className="section">
              <h3 className="center indigo-text darken-4">Editar</h3>
              <div className="row">
                  <div className="row">

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Matéria</b></span>
                            <p>Editar uma matéria.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/editar-escolher-materia')}>Editar</a></div>
                          </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Professor</b></span>
                            <p>Editar um professor.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn indigo cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/editar-escolher-professor')}>Editar</a></div>
                          </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card  indigo darken-4">
                          <div className="card-content white-text">
                            <span className="card-title cyan-text accent-1"><b>Aluno</b></span>
                            <p>Editar um aluno.</p>
                            <br />
                            <div className="section center-align"><a className="waves-effect waves-light btn indigo cyan indigo-text text-darken-4" onClick={() => browserHistory.push('/admin/editar-escolher-aluno')}>Editar</a></div>
                          </div>
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

export default EditarInicial;