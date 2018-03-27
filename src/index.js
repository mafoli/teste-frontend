import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Empresas from './container/Empresas';
import Home from './container/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/empresas' component={Empresas} />
            
        </Route>

    </Router>
    ,
    document.getElementById('root'));
    
registerServiceWorker();
