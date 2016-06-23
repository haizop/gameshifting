import React from 'react';
import Board from './components/board';
import './styles/style.scss';

ReactDOM.render(
  <Board />,
  document.getElementById('App')
);

// DEBUG:
window.store = store;
