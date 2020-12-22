import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';

const StockGraph = (props) => {

  const [xValues, setXValues] = useState(null)
  const [yValues, setYValues] = useState(null)

  // get arrays for stocks for graph
  useEffect(() => {
    if(props.stocks){
      let stockDates = []
      let stockPrices = []
      for (let key in props.stocks['Time Series (Daily)']){
        stockDates.push(key)
        stockPrices.push(props.stocks['Time Series (Daily)'][key]['4. close'])
      }
      setXValues(stockDates)
      setYValues(stockPrices)
    }
  }, [props.stocks])


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

export default StockGraph
