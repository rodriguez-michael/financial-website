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
        <hr></hr>
        <h1>List Details</h1>
        <Link to={`/news/favorites/${props.match.params.listID}/edit`}><span style={{fontSize: '25px', color: 'green'}}>Edit List</span></Link>
        <span> <span style={{fontSize: '25px'}}> | </span> </span>
        <Link to={`/news/favorites/${props.match.params.listID}/delete`}><span style={{fontSize: '25px', color:'green'}}>Delete List</span></Link>
        <hr></hr>  
        <FavoriteArticlesList articles={ articles } />
      </div>
      }
    </div>
  )
}

export default FavoriteNewsGroupDetailPage
