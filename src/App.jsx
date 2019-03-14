import React from 'react';
import './App.css';
import Board from './containers/Board';
import ActionBar from './containers/ActionBar';

const App = () => (
  <div className="App">
    <ActionBar />
    <Board />
  </div>
);

export default App;
