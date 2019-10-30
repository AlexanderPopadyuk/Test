import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';

ReactDOM.render((
  <Provider store={store}>
    <CssBaseline />
    <Router />
  </Provider>
), document.getElementById('root'));
