import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './router';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './data/store';
import { PersistGate } from 'redux-persist/integration/react';
import './css/index.css';
import './css/tailwind.css';

const redux = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <RouterApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
