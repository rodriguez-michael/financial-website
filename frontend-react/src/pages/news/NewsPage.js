import React, { useState, useEffect } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import NewsList from '../../components/news/NewsList.js'

const NewsPage = () => {

  const [articles, setArticles] = useState(null)
  const [favoriteArticles, setFavoriteArticles] = useState(null)
  // const [user, setUser] = useState(localStorage.getItem('user'))

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
        setTimeout(() => {
          refreshPage()
      },50)
      }
        
    }
    getData()
    },[]);


    const refreshPage = () => {
      window.location.reload();
    }




  return (
    <div>
      <h1>News Page</h1>
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
