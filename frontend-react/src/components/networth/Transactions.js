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


const Transactions = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#484848',
      backgroundColor: '#C7E9BA'
    },
  }));


  const classes = useStyles();

  
  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }


  return (
    <div className={classes.root}>
      <Grid container justify = 'center' alignItems="center" spacing={3}>
        <Grid item xs={8} >
          <Paper className={classes.paper} style={{background: 'white'}}>
            <h1 style={{textDecoration: 'underline', background: 'white'}} >Transactions in Last 30 Days</h1>
          </Paper>
        </Grid>
        <Grid item sm={7}>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Payment Recipient</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.transactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {transaction.props.children[0]}
                      </TableCell>
                      <TableCell align="left">{transaction.props.children[2]}</TableCell>
                      <TableCell align="left">
                        {currencyFormat(transaction.props.children[4])}
                      </TableCell>
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

export default Transactions
