import React, { useState, useEffect } from 'react'
import StocksAPI from '../../api/StocksAPI.js'
import Plot from 'react-plotly.js';

const StockFavoriteGraph = (props) => {

  const [stocks, setStocks] = useState(null)
  const [xValues, setXValues] = useState(null)
  const [yValues, setYValues] = useState(null)
  console.log('graph props', props)
  console.log('stocks', stocks)
  console.log('xvalues', xValues)
  console.log('yvalues',yValues)

  useEffect(() => {
  const getData = async () =>{
    try{
      const response = await StocksAPI.fetchStockBySymbol(props.stockInfo.name)
      setStocks(response)
    }
    catch(error){
      console.error(error)
    }
  }
  
  getData()

  }, [props.stockInfo.name])



  useEffect(() => {
    if(stocks){
      let stockDates = []
      let stockPrices = []
      for (let key in stocks['Time Series (Daily)']){
        stockDates.push(key)
        stockPrices.push(stocks['Time Series (Daily)'][key]['4. close'])
      }
      setXValues(stockDates)
      setYValues(stockPrices)
    }

  
  }, [stocks])


  return (
    <div>
    {
      xValues && yValues
      &&
      <div>
        <Plot
          data={[
            {
              x: xValues,
              y: yValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    }
    
  </div>
  )
}

export default StockFavoriteGraph
