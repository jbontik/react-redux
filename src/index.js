import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from "react-router";
import routes from "./routes";
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
