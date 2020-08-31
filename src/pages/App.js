import React from 'react';
import Table from '../components/Table'
import Card from '../components/Card'
import '../styles/App.css';
import {Grid} from '@material-ui/core/';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
        <p>Status: Running...</p>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Grid>
      </header>
      <body className="App-body">
        <Table></Table>
        
      </body>
    </div>
  );
}

export default App;
