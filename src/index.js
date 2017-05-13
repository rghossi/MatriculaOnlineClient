import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Login from './components/Login';
import TelaInicial from './components/TelaInicial';
import GradeCurricular from './components/GradeCurricular';

function isLoggedIn() {
	if (true) {
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
	  </Route>
  </div>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
);
