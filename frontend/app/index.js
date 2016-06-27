import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import './styles/bootstrap.min.css';


ReactDOM.render(
  <Game />,
  document.getElementById('app')
);

// DEBUG:
window.store = store;
