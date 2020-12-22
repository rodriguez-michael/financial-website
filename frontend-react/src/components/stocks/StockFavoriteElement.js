import React from 'react'
import StocksAPI from '../../api/StocksAPI.js'
import { Button } from 'reactstrap';
import StockFavoriteGraph from './StockFavoriteGraph.js';

const StockFavoriteElement = (props) => {

  
  let handleStockDelete = (event) => {
    event.preventDefault()
    try{
      StocksAPI.deleteStock(localStorage.getItem('auth-user'), Number(event.target.id))
      refreshPage()
    }
    catch(error){
      console.error(error)
    }
  }

  const refreshPage = () => {
    window.location.reload();
  }
  
  return (
    <div>
      {
        props.stockFavorites
        &&
        props.stockFavorites.map((stock, index) => (
          <div key={index+5000}>
            <h3 key={index+1000} style={{textDecoration: 'underline', color:'#484848'}}>{stock.name}</h3>
            <Button key={stock.id} id={stock.id} onClick={handleStockDelete} color="danger" size="sm" style={{marginTop: '15px', marginBottom: '15px'}}>Remove Stock from Favorites</Button>
            <StockFavoriteGraph stockInfo={stock}/>
            <hr></hr>
          </div>
        ))
      }
    </div>
  )
}

export default StockFavoriteElement
