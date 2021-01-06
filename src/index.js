import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';
import { createBook } from './actions/index';

store.dispatch(createBook({ title: 'Water', category: 'History' }));
store.dispatch(createBook({ title: 'Little mermaid', category: 'Action' }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
