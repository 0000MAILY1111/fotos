import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';   ///si algo no carga es esto
import 'bootstrap/dist/js/bootstrap.bundle.min';  ///si algo no carga es esto


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter> 
    <App />
  </BrowserRouter>
  
)
