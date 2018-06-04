import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import {getWebinars} from 'actions/webinarsActions';
import Routes from './routes/routes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.store.dispatch(getWebinars());
  }

  render() {
    return (
      <Provider store={this.store}>
        <Routes/>
      </Provider>
    );
  }
}