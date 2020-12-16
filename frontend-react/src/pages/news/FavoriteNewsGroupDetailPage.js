import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NewsAPI from '../../api/NewsAPI.js'
import FavoriteArticlesList from '../../components/news/FavoriteArticlesList.js'

const FavoriteNewsGroupDetailPage = (props) => {

  const [articles, setArticles] = useState(null)

  // Get favorited articles and set them as state
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await NewsAPI.fetchFavoriteNewsListByID(props.match.params.listID, localStorage.getItem('auth-user'))
        setArticles(response)
      }
      catch(error){
        console.error(error)
      }
    }
      getData()
  },[props.match.params.listID]);


  return (
    <div>
      {
      articles 
      &&
      <div>
        <Link to={`/news/favorites/${props.match.params.listID}/edit`}>Edit List</Link>
        <span> | </span>
        <Link to={`/news/favorites/${props.match.params.listID}/delete`}>Delete List</Link>  
        <FavoriteArticlesList articles={ articles } />
      </div>
      }
    </div>
  )
}

export default FavoriteNewsGroupDetailPage
