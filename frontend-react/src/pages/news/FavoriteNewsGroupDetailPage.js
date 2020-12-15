import React, { useState, useEffect, useContext} from 'react'
import UserContext from '../../contexts/UserContext';
import NewsAPI from '../../api/NewsAPI.js'
import FavoriteArticlesList from '../../components/news/FavoriteArticlesList.js'

const FavoriteNewsGroupDetailPage = (props) => {

  const userContext = useContext(UserContext)
  const [articles, setArticles] = useState(null)

  console.log('from group detail', props.match.params.listID)

  console.log(userContext)

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
      <h1>Actual Articles go here</h1>
      {
      articles 
      && 
      <FavoriteArticlesList articles={ articles }/>
      }
    </div>
  )
}

export default FavoriteNewsGroupDetailPage
