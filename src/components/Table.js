import React, {useEffect,useContext,useState} from 'react';
// import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default (props)=> {
  const classes = useStyles();
  const [checked, setChecked] = useState({});
  const handleChange = (event) => {
    let newObj={};
    newObj[event.target.name]={'flag': event.target.checked};
    setChecked({...checked,...newObj});
  };
  useEffect(()=>{
    // axios.get('')
    // .then((res)=>{   
    //once api is set up the obj will be created
    //for now I have dummy id values
    setChecked({1:{'flag':false},2:{'flag':false},3:{'flag':false},4:{'flag':false},5:{'flag':false}})
    // });  
  },[]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Socket ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Serial Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Checkbox
                    name={row.id}
                    color="default"
                    checked={checked[row.id]===undefined ? false : checked[row.id].flag}
                    onChange={handleChange}
                /> {row.id}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.serial}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}