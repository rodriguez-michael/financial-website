import React, { useState } from 'react'
import StocksAPI from '../../api/StocksAPI.js'
import StockInfo from '../../components/stocks/StockInfo';
import { Button } from 'reactstrap';
import { Alert } from 'react-bootstrap';
import StockFavoriteButton from '../../components/stocks/StockFavoriteButton';

const StocksPage = () => {

  const [stocks, setStocks] = useState(null)

  // what happens search bar button is clicked
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

  // search bar styling
  const BarStyling = {width:"30rem", height: '50px', background:"#DCDCDC", border:"none", padding:".6rem", marginBottom: '30px', marginTop: '30px'};

  return (
    <div>
      <hr></hr>
      <h1>Stocks</h1>
      <hr></hr>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            style={BarStyling}
            key="random1"
            placeholder={"Search for stocks by typing in a stock ticker  --->  AMZN"}
            name='search'
            required
          />
          <Button color="success" size="lg" style={{marginLeft: '15px'}}>Search</Button>
        </form>
        {
        stocks
        ?
          <div>
            {
              stocks['Meta Data'] 
              ?
              <div>
                <h1 style={{color:'#484848', textDecoration: 'underline'}}>{stocks['Meta Data']['2. Symbol'].toUpperCase()}</h1>
  
                <StockFavoriteButton stockName={stocks['Meta Data']['2. Symbol'].toUpperCase()} />

                <StockInfo stocks={stocks}/>
              </div>
              :
              <h1>Enter a Valid Stock Symbol</h1>
            }
          </div>
        :
          <div>
            {/* <Alert variant={'warning'} style={{marginTop: '50px'}}>Must enter a valid stock market symbol to see graph and historical data!</Alert> */}
          </div>
        }
      </div>
    </div>
  )
}

export default StocksPage