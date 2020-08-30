import React from 'react';
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

function createData(id, status, serial) {
  return { id, status, serial };
}

const rows = [
  createData('1', 'Idle', ''),
  createData('2', 'Idle', ''),
  createData('3', 'Idle', ''),
  createData('4', 'Idle', ''),
  createData('5', 'Idle', ''),
];

export default function SimpleTable() {
  const classes = useStyles();

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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Checkbox
                    defaultChecked
                    indeterminate
                    color="default"
                    inputProps={{ 'aria-label': 'indeterminate checkbox' }}
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