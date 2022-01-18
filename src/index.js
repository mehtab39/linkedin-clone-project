import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux'
import store from './Store/index'
import { AuthProvider } from "./contexts/AuthContext"

ReactDOM.render(
   <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ReduxProvider store={store}>
         <App />
    </ReduxProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
