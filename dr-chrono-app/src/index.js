import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Dashboard from './dashboard';

// ReactDOM.render(
//   // <React.StrictMode>
//     <Dashboard />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');

if (rootElement != null) {
  ReactDOM.render(<Dashboard />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
Dashboard();
