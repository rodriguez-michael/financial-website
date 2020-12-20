import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import UserContext from '../../contexts/UserContext';
import isLoggedInContext from '../../contexts/isLoggedInContext';
import NewsAPI from '../../api/NewsAPI.js'
import FavoriteNewsGroupList from '../../components/news/FavoriteNewsGroupList.js'

const NewsFavoritesPage = () => {

  const userContext = useContext(UserContext)
  const LoggedInContext = useContext(isLoggedInContext)
  const [articles, setArticles] = useState(null)

  

  // Get favorited articles and set them as state
  useEffect(() => {
    
    

    const getData = async () => {

      if(localStorage.getItem('user') !== 'null'){
      try{
        
        const response = await NewsAPI.fetchFavoriteLists(localStorage.getItem('auth-user'), Number(localStorage.getItem('user')))
        setArticles(response)
      }
      catch(error){
        console.error(error)
      }
    }else{
      if(userContext.user){
      setTimeout(() => {
          refreshPage()
      },50)}
      
    }
    }
      getData()
  },[userContext, LoggedInContext]);

  console.log('favorite articles', articles)

  const refreshPage = () => {
    window.location.reload();
  }
  
  

  return (
    <div>
      <h1>News Favorites Page</h1>
      {
        userContext.user
        ?
        <div>
          <div>
           <Link to={'/news/favorites/new'}>Create New List</Link> 
          </div>
          
          <FavoriteNewsGroupList articles={articles} />
        </div> 
        :
        <div>
          <Alert variant={'danger'}>Must be logged in to add news articles to your favorites!</Alert>
          <Link to="/login">Login Now!</Link>
        </div>
      }
    </div>
  )
}

export default NewsFavoritesPage