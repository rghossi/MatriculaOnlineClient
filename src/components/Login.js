import React, { Component } from 'react';
import logoUenf from './imagens/logoUenf.png';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	matricula: '',
    	senha: '',
    	loading: false
    };

    this.handleMatriculaChange = this.handleMatriculaChange.bind(this);
    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMatriculaChange(event) {
    this.setState({matricula: event.target.value});
  }

  handleSenhaChange(event) {
    this.setState({senha: event.target.value});
  }

  handleSubmit(e) {
  	e.preventDefault();
  	this.setState({loading: true});
  	axios.post('https://mo-api.herokuapp.com/api/login', { 
  		matricula: this.state.matricula, 
  		senha: this.state.senha
  	})
	  .then((response) => {
	  	localStorage.setItem('mAluno', this.state.matricula);
	  	localStorage.setItem('sAluno', this.state.senha);
	    browserHistory.push('/');
	  })
	  .catch((error) => {
	  	alert("Login inválido, tente novamente com outras credenciais.")
	    console.log(error);
	    this.setState({loading: false});
	  });
  }

  render() {
    return (
		  <main className="indigo">
		    <center>
		      <div className="section"></div>
		      <img className="responsive-img" alt="uenf" style={{width: '250px'}} src={logoUenf} />
		      <div className="section"></div>

		      <div id="login-container" className="container">
		        <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>

		          <form className="col s12" onSubmit={this.handleSubmit}>
		            <div className='row'>
		              <div className='col s12'>
		              <h5 className="pink-text">Sistema de Pré-Matrícula</h5>
		              </div>
		            </div>

		            <div className='row'>
		              <div className='input-field col s12'>
		                <input value={this.state.matricula} onChange={this.handleMatriculaChange} className='validate' type='text' required="required" name='numbers' id='numbers' pattern="[0-9]+$" />
		                <label htmlFor='numbers'>Digite sua matricula</label>
		              </div>
		            </div>

		            <div className='row'>
		              <div className='input-field col s12'>
		                <input value={this.state.senha} onChange={this.handleSenhaChange} className='validate' type='password' name='password' id='password' />
		                <label htmlFor='password'>Digite sua senha</label>
		              </div>
		              <label style={{float: 'right'}}>
		                <a className='pink-text' href='#!'><b>Esqueceu sua senha?</b></a>
		              </label>
		            </div>

		            <div className="row">          
		              <div className='input-field col s12'>
		                  <input type="checkbox" id="remember-me" />
		                  <label htmlFor="remember-me">Lembrar senha</label>
		              </div>
		            </div>

		            <br />
		            <center>
		              <div className='row'>
		                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo' disabled={this.state.loading}>Login</button>
		              </div>
		            </center>
		          </form>
		        </div>
		      </div>
		    </center>

		    <div className="section"></div>
		    <div className="section"></div>
		  </main>

    );
  }
}

export default Login;