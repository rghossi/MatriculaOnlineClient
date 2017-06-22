import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Login from './components/Login';
import TelaInicial from './components/TelaInicial';
import GradeCurricular from './components/GradeCurricular';
import PlanoDeEstudos from './components/PlanoDeEstudos';
import InclusaoExclusao from './components/InclusaoExclusao';
import PreMatriculaInicial from './components/PreMatriculaInicial';
import PreMatricula from './components/PreMatricula';
import QuebraPreRequisito from './components/QuebraPreRequisito';

function isLoggedIn() {
	if (localStorage.getItem('mAluno') && localStorage.getItem('sAluno')) {
		return true;
	} else {
		browserHistory.push("/login");
		return false
	}
}

const Routes = (
	<div>
		<Route path="/login" component={Login} />
	  <Route path="/" component={App} onEnter={isLoggedIn}>
	    <IndexRoute component={TelaInicial}/>
	    <Route path="/grade" component={GradeCurricular} />
	    <Route path="/plano-estudos" component={PlanoDeEstudos} />
	    <Route path="/inclusao-exclusao" component={InclusaoExclusao} />
	    <Route path="/pre-matricula-inicial" component={PreMatriculaInicial} />
	    <Route path="/pre-matricula" component={PreMatricula} />
	    <Route path="/quebra-requisitos" component={QuebraPreRequisito} />
	  </Route>
  </div>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
);
