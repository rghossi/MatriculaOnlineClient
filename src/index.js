import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Login from './components/Login';
import TelaInicial from './components/TelaInicial';
import GradeCurricular from './components/GradeCurricular';
import PlanoDeEstudos from './components/PlanoDeEstudos';
import InclusaoExclusaoInicial from './components/InclusaoExclusaoInicial';
import InclusaoExclusao from './components/InclusaoExclusao';
import PreMatriculaInicial from './components/PreMatriculaInicial';
import PreMatricula from './components/PreMatricula';
import QuebraPreRequisito from './components/QuebraPreRequisito';
import Admin from './components/admin/Admin';
import TelaInicialAdmin from './components/admin/TelaInicialAdmin';
import PedidoDeQuebra from './components/admin/PedidoDeQuebra';
import CadastrosInicial from './components/admin/CadastrosInicial';
import CadastroMateria from './components/admin/CadastroMateria';
import CadastroAluno from './components/admin/CadastroAluno';
import CadastroProfessor from './components/admin/CadastroProfessor';
import EditarInicial from './components/admin/EditarInicial';
import EditarEscolherAluno from './components/admin/EditarEscolherAluno';
import EditarAluno from './components/admin/EditarAluno';
import EditarEscolherMateria from './components/admin/EditarEscolherMateria';
import EditarMateria from './components/admin/EditarMateria';
import EditarEscolherProfessor from './components/admin/EditarEscolherProfessor';
import EditarProfessor from './components/admin/EditarProfessor';

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
	    <Route path="/inclusao-exclusao-inicial" component={InclusaoExclusaoInicial} />
	    <Route path="/inclusao-exclusao" component={InclusaoExclusao} />
	    <Route path="/pre-matricula-inicial" component={PreMatriculaInicial} />
	    <Route path="/pre-matricula" component={PreMatricula} />
	    <Route path="/quebra-requisitos" component={QuebraPreRequisito} />
	  </Route>
	  <Route path="/admin" component={Admin}>
	  	<IndexRoute component={TelaInicialAdmin} />
	    <Route path="/admin/quebra-requisitos" component={PedidoDeQuebra} />
	    <Route path="/admin/cadastros-inicial" component={CadastrosInicial} />
	    <Route path="/admin/cadastro-materia" component={CadastroMateria} />
	    <Route path="/admin/cadastro-aluno" component={CadastroAluno} />
	    <Route path="/admin/cadastro-professor" component={CadastroProfessor} />
	    <Route path="/admin/editar-inicial" component={EditarInicial} />
	    <Route path="/admin/editar-escolher-aluno" component={EditarEscolherAluno} />
	    <Route path="/admin/editar-aluno" component={EditarAluno} />
	    <Route path="/admin/editar-escolher-materia" component={EditarEscolherMateria} />
	    <Route path="/admin/editar-materia" component={EditarMateria} />
	    <Route path="/admin/editar-escolher-professor" component={EditarEscolherProfessor} />
	    <Route path="/admin/editar-professor" component={EditarProfessor} />
	  </Route>
  </div>
);

ReactDOM.render(
  <Router history={browserHistory} routes={Routes} onUpdate={() => window.scrollTo(0, 0)} />,
  document.getElementById('root')
);
