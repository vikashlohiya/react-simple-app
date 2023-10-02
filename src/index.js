import React,{useState ,setState} from 'react';
import ReactDOM from 'react-dom';
import Navbar  from "./components/Navbar";
import Alert  from "./components/Alert";
import Uppercase  from "./components/Uppercase";
import reportWebVitals from './reportWebVitals';

import Main  from "./Main";
ReactDOM.render(
  
  <React.StrictMode>  

    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
