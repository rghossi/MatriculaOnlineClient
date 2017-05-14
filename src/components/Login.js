import React, { Component } from 'react';
import logoUenf from './imagens/logoUenf.png';

class Login extends Component {
  render() {
    return (
		  <main className="indigo">
		    <center>
		      <div className="section"></div>
		      <img className="responsive-img" alt="uenf" style={{width: '250px'}} src={logoUenf} />
		      <div className="section"></div>

		      <div id="login-container" className="container">
		        <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE'}}>

		          <form className="col s12" method="post">
		            <div className='row'>
		              <div className='col s12'>
		              <h5 className="pink-text">Sistema de Pré-Matrícula</h5>
		              </div>
		            </div>

		            <div className='row'>
		              <div className='input-field col s12'>
		                <input className='validate' type='text' required="required" name='numbers' id='numbers' pattern="[0-9]+$" />
		                <label htmlFor='numbers'>Digite sua matricula</label>
		              </div>
		            </div>

		            <div className='row'>
		              <div className='input-field col s12'>
		                <input className='validate' type='password' name='password' id='password' />
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
		                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
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