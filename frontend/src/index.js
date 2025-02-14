import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider >,

  document.getElementById('root')
);

