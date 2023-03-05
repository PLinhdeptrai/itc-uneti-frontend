import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import reduxConfig from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = reduxConfig()
root.render(
  <Provider store={store}>
    <React.StrictMode >
      <BrowserRouter>
        <App></App>
        
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
