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




const StocksAPI = { 
  fetchStockBySymbol,
}

export default StocksAPI

