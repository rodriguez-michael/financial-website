import React, { useState, useEffect, useContext } from 'react'
import { Alert } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';
import NewsAPI from '../../api/NewsAPI.js'
import FavoriteNewsGroupList from '../../components/news/FavoriteNewsGroupList.js'

const NewsFavoritesPage = () => {

  const userContext = useContext(UserContext)
  const [articles, setArticles] = useState(null)

  console.log(articles)
  console.log([articles])

  // Get favorited articles and set them as state
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await NewsAPI.fetchFavoriteLists(localStorage.getItem('auth-user'))
        setArticles(response)
      }
      catch(error){
        console.error(error)
      }
    }
      getData()
  },[]);

  return (
    <div>
      <h1>News Favorites Page</h1>
      {
        userContext.user 
        ?
        <FavoriteNewsGroupList articles={articles} /> 
        :
        <Alert variant={'danger'}>Must be logged in to have favorites!</Alert>
      }
    </div>
  )
}

export default NewsFavoritesPage