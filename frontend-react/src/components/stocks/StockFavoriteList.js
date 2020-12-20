import React from 'react'
import StockFavoriteElement from './StockFavoriteElement'

const StockFavoriteList = (props) => {

  return (
    <div>
      <StockFavoriteElement stockFavorites={props.stockFavorites}/>
    </div>
  )
}

export default StockFavoriteList
