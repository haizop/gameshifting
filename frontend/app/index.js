import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './styles/style.scss';

ReactDOM.render(
  <Board />,
  document.getElementById('app')
);

// DEBUG:
window.store = store;
