import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {GlobalStyle} from "./components/Styles/GlobalStyles/index"
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

