import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from 'pages/MainPage';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/?page=:id" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}