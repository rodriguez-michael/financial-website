import React, { useState, useContext, useEffect } from 'react'
import isLoggedInContext from '../../contexts/isLoggedInContext';
import UserContext from '../../contexts/UserContext';
import StocksAPI from '../../api/StocksAPI.js'
import StockInfo from '../../components/stocks/StockInfo';
import { Button } from 'reactstrap';
import { Alert } from 'react-bootstrap';

const StocksPage = () => {

  const [stocks, setStocks] = useState(null)
  const LoggedInContext = useContext(isLoggedInContext)
  const userContext = useContext(UserContext)


  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      const response = await StocksAPI.fetchStockBySymbol(event.target.search.value)
      setStocks(response)
    }
    catch(error){
      console.error(error)
    }
  }

  const handleStockSave = async (event) => {
    event.preventDefault()
    try{
      // save in database with name of symbol saved or with whole url
      // have a foreign key tied to user
      // can be deleted later by calling the delete function in api

      // ** when they navigate to favorites page...it will already have called on useEffect the django api to get the stock names from the table...it will store those names in state

      // ** with that state, i can loop through it and for each stock name make an api call to get its dictionary data and store it in an array?

      // **can then make a graph for each stock name and store it in a compnent like article teaser

      console.log(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stocks['Meta Data']['2. Symbol']}&apikey=XHYEY7ACZCGWIRQR`)
    }
    catch(error){
      console.error(error)
    }
  }

  const BarStyling = {width:"40rem",background:"#F2F1F9", border:"none", padding:".6rem"};

  return (
    <div>
    
        <div>
          <form onSubmit={handleSubmit}>
            <input 
                style={BarStyling}
                key="random1"
                placeholder={"Search for stocks by typing in their Symbol -> 'AMZN' for Amazon"}
                name='search'
                required
              />
            <Button color="primary" size="lg" >Search</Button>
          </form>
          {stocks
          ?
            <div>
              {
                stocks['Meta Data'] 
                ?
                <div>
                  <h1>{stocks['Meta Data']['2. Symbol'].toUpperCase()}</h1>
                  <Button color="success" size="sm" onClick={handleStockSave}>Add to Favorites</Button>
                  <StockInfo stocks={stocks}/>
                </div>
                :
                <h1>Enter a Valid Stock Symbol</h1>
              }
            </div>
          :
          <div>
            <Alert variant={'warning'}>Must enter a valid stock market symbol to see graph and historical data!</Alert>
          </div>
          }
        </div>

  

    </div>
  )
}

export default StocksPage