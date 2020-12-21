import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Balances = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  const classes = useStyles();

  
  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


  return (
    <div className={classes.root}>
      <Grid container justify = 'center' alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1 style={{textDecoration: 'underline'}} >NetWorth</h1>
            <h3 style={ props.netWorth >= 0 ? { color:'green'} : {color : 'red'} }>{currencyFormat(props.netWorth)}</h3>
          </Paper>
        </Grid>
        <Grid item sm={7}>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name of Account</TableCell>
                    <TableCell align="left">Type of Account</TableCell>
                    <TableCell align="left">Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.accountInfo.map((account, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {account.props.children[0]}
                      </TableCell>
                      <TableCell align="left">{account.props.children[2]}</TableCell>
                      <TableCell align="left">{currencyFormat(account.props.children[4])}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Balances
