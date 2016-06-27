import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';


ReactDOM.render(
  <Board />,
  document.getElementById('app')
);

// DEBUG:
window.store = store;
