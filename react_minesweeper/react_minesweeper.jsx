import Game from './components/game';
import React from 'react';
import ReactDOM from 'react-dom';



document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('root');
  ReactDOM.render(<Game />, main);
})