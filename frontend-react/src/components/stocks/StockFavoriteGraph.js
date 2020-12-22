import React, { useState, useEffect } from 'react'
import StocksAPI from '../../api/StocksAPI.js'
import Plot from 'react-plotly.js';

const StockFavoriteGraph = (props) => {

  const [stocks, setStocks] = useState(null)
  const [xValues, setXValues] = useState(null)
  const [yValues, setYValues] = useState(null)

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
                marker: {color: '#97D38D'},
              }
            ]}
            layout={{width: 1000, height: 450, title: 'Closing Price for last 100 days'}}
          />
        </div>
      }
    </div>
  )
}

export default StockFavoriteGraph
