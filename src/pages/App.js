import React from 'react';
import Table from '../components/Table';
import Card from '../components/Card';
import '../styles/App.css';
import {Grid} from '@material-ui/core/';


function App(props) {

  const sequenceSelected = (event)=>{
    let currentSequence=event.currentTarget.value;
    console.log(currentSequence);
    //here we will send the currentSequence to the server to get the 
  }

  function createData(id, status, serial, flag) {
    return { id, status, serial,flag };
  }
  const tableData = [
    createData('1', 'Idle', '',false),
    createData('2', 'Idle', '',false),
    createData('3', 'Idle', '',false),
    createData('4', 'Idle', '',false),
    createData('5', 'Idle', '',false),
  ];

  const data = [
    {
      url: './img/tempIcon.jpg',
      title: 'Sequence1',
      width: '80%',
    },
    {
      url: './img/tempIcon.jpg',
      title: 'Sequence2',
      width: '80%',
    },
    {
      url: './img/tempIcon.jpg',
      title: 'Sequence3',
      width: '80%',
    },
    {
      url: './img/tempIcon.jpg',
      title: 'Sequence4',
      width: '80%',
    },
  ];

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
          {data.map((element)=> <Card click={sequenceSelected} item={element}/>)}
        </Grid>
      </header>
      <body className="App-body">
        <Table rows={tableData}></Table>
        
      </body>
    </div>
  );
}

export default App;
