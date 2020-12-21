import React, { useState, useEffect, useContext } from 'react'
import StocksAPI from '../../api/StocksAPI.js'
import UserContext from '../../contexts/UserContext';
import { Button } from 'reactstrap';
import { Redirect } from "react-router-dom"

const StockFavoriteButton = (props) => {

  const userContext = useContext(UserContext)
  let [saved, setSaved] = useState(null)
  const [favoriteStocks, setFavoriteStocks] = useState(null)
  
  useEffect(() => {
   
    const getData = async () => {

      if(localStorage.getItem('user') !== 'null'){
        try{
          
          const response = await StocksAPI.fetchFavoriteStocks(localStorage.getItem('auth-user'), Number(localStorage.getItem('user')))

          let favoriteStockNames=[]
          for(let i=0; i<response.length; i++){
            favoriteStockNames.push(response[i].name)
          }
          setFavoriteStocks(favoriteStockNames)
        }
        catch(error){
          console.error(error)
        }
      }
      else{
        if(userContext.user){
        setTimeout(() => {
            refreshPage()
        },50)}
      }
    }
      getData()
  }, [userContext])


  const handleStockSave = async (event) => {
    event.preventDefault()
    try{
      console.log(props.stockName)
      const stockObject = {
        name: props.stockName,
        user: userContext.user.id
      }
      StocksAPI.addStock(localStorage.getItem('auth-user'), stockObject)
      let elem = document.getElementById(props.stockName);
      elem.parentNode.removeChild(elem);
    }
    catch(error){
      console.error(error)
    }
    setSaved(true)
  }

  const refreshPage = () => {
    window.location.reload();
  }

  if(saved){
    return <Redirect to="/stocks/favorites" />
  }

  return (
    <div>
      {
        favoriteStocks
        &&
        <div>
          {!favoriteStocks.includes(props.stockName) ? <Button id={props.stockName} onClick={handleStockSave} color="success" size="sm">Add to Favorites</Button> : <Button color="warning" size="sm" disabled>Already in Favorites</Button>}
        </div>
      }
    </div>
  )
}

export default StockFavoriteButton
