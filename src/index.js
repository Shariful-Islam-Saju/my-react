import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './newCss.css'
const name = 'Shariful Islam'
const date = new Date();
const dayName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h2>Hello</h2>
    <p>{name}</p>
    <p>Today's date {dayName + '/' + (monthName + 1) + '/' + yearName}</p>
    <p className='green'>Background Green</p>
  </div>




  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
