import React from 'react'
import StockGraph from './StockGraph'
import StockPriceList from './StockPriceList'

const StockInfo = (props) => {


  return (
    <div>
      <StockGraph stocks={props.stocks}/>
      <StockPriceList stocks={props.stocks}/>
    </div>
  )
}

export default StockInfo
