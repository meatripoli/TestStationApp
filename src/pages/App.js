import React from 'react';
import Table from '../components/Table'
import logo from '../img/logo.svg';
import '../styles/App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
        <p>Status: Running...</p>
      </header>
      <body className="App-body">
        <Table></Table>
      </body>
    </div>
  );
}

export default App;
