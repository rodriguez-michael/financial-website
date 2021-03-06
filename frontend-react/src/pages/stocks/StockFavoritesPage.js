import React, { useContext, useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import StockFavoriteList from '../../components/stocks/StockFavoriteList';
import UserContext from '../../contexts/UserContext';
import isLoggedInContext from '../../contexts/isLoggedInContext';
import StocksAPI from '../../api/StocksAPI.js'

const StockFavoritesPage = () => {

  const userContext = useContext(UserContext)
  const LoggedInContext = useContext(isLoggedInContext)
  const [stockFavorites, setStockFavorites] = useState(null)

  useEffect(() => {
    
    const getData = async () => {

      if(localStorage.getItem('user') !== 'null'){
      try{
        const response = await StocksAPI.fetchFavoriteStocks(localStorage.getItem('auth-user'), Number(localStorage.getItem('user')))
        setStockFavorites(response)
      }
      catch(error){
        console.error(error)
      }
      }else{
        if(userContext.user){
        setTimeout(() => {
          refreshPage()
      },50)}
      
    }
    const refreshPage = () => {
      window.location.reload();
    }
  }
    getData()
  },[userContext, LoggedInContext]);

  return (
    <div>
      <hr></hr>
      <h1>Stock Favorites</h1>
      <hr></hr>
      {
        userContext.user 
        ?
          <div>
            <StockFavoriteList stockFavorites={stockFavorites}/>
          </div>
        :
          <div>
            <Alert variant={'danger'} style={{marginTop: '50px'}}>Must be logged in to add stocks to your favorites!</Alert>
            <Link to="/login" style={{fontSize: '40px', color: 'green'}}>Login Now!</Link>
          </div>
      }
    </div>
  )
}

export default StockFavoritesPage
