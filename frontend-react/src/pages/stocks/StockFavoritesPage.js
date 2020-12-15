import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';

const StockFavoritesPage = () => {

  const userContext = useContext(UserContext)

  return (
    <div>
      <h1>Stock Favorites</h1>
      {
        userContext.user 
        ?
        <Alert variant={'success'}>Add favorites from Stocks and they will appear here!</Alert>
        :
        <Alert variant={'danger'}>Must be logged in to have favorites!</Alert>
      }
    </div>
  )
}

export default StockFavoritesPage
