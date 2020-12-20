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

export default StockGraph
