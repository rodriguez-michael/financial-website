import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StockPriceList = (props) => {

  const [stockPriceList, setStockPriceList] = useState(null)


  useEffect(() => {
    if(props.stocks){
      let stockObj = {}
      for (let key in props.stocks['Time Series (Daily)']){
        stockObj[key] = `${props.stocks['Time Series (Daily)'][key]['4. close']}`
      }
      setStockPriceList(stockObj)
    }

  }, [props.stocks])
  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#C7E9BA'
    },
  }));


  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h3>Closing Prices for last 100 Days</h3>
      {
        stockPriceList
        &&
      <Grid container justify = 'center' alignItems="center" spacing={3}>
        <Grid item sm={7}>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Closing Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(stockPriceList).map((stock, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {stock[0]}
                      </TableCell>
                      <TableCell align="left">
                        ${stock[1]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>          
          </Paper>
        </Grid>
      </Grid>
      } 
    </div>
  )
}

export default StockPriceList
