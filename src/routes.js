import React from 'react';
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import {Route, IndexRoute} from 'react-router';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
// first load App,
// then pass HomePage and AboutPage as children (this.props.children)
