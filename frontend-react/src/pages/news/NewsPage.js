import React, { useState, useEffect, useContext } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import NewsList from '../../components/news/NewsList.js'
import isLoggedInContext from '../../contexts/isLoggedInContext';
import UserContext from '../../contexts/UserContext';

const NewsPage = () => {

  const [articles, setArticles] = useState(null)
  const [favoriteArticles, setFavoriteArticles] = useState(null)
  const LoggedInContext = useContext(isLoggedInContext)
  const userContext = useContext(UserContext)

  
  // Get all articles from news api and set them as state
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await NewsAPI.fetchArticles()
        setArticles(response)
      }
      catch(error){
        console.error(error)
      }
    }
      getData()
  },[]);


  // Get all favorite articles from database and set them as state
    useEffect(() => {
      const getData = async () => {
        if (localStorage.getItem('user') !== 'null'){ 
        try{
          let response = await NewsAPI.fetchFavoriteLists(localStorage.getItem('auth-user'), Number(localStorage.getItem('user')))
          setFavoriteArticles(response)
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
    },[userContext, LoggedInContext]);


    const refreshPage = () => {
      window.location.reload();
    }


  return (

    <div>
      <hr></hr>
      <h1>Top Business News</h1>
      {
        articles 
        &&
        <div> 
          {localStorage.getItem('user') && <NewsList articles={ articles } favoriteArticles={favoriteArticles}/>}
        </div>
      }
    </div>
  )
}

export default NewsPage
