import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from "react-router";
import routes from "./routes";
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';

ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app')
  );
