const fetchStockBySymbol = async(searchbar) => {
  const apiKey = 'XHYEY7ACZCGWIRQR'
  try{
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchbar}&apikey=${apiKey}`)
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
};


const fetchFavoriteStocks = async (token, userID) => {
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/stocklist?user=${userID}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`        
      }
    })
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
}


const addStock = async (token, stockObject) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/stocklist/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'POST',
      body: JSON.stringify(stockObject)
    })
    return response
  }
  catch(error){
    console.error(error)
  }
}


const deleteStock = async (token, id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/stocklist/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'DELETE',
    })
    return response
  }
  catch(error){
    console.error(error)
  }
};




const StocksAPI = { 
  fetchStockBySymbol,
  fetchFavoriteStocks,
  addStock,
  deleteStock,
}

export default StocksAPI

