import React, { useState, useEffect } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import NewsList from '../../components/news/NewsList.js'

const NewsPage = () => {

  const [articles, setArticles] = useState(null)

  console.log(articles)

  // Get all articles and set them as state
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

  return (
    <div>
      <h1>News Page</h1>
      {
      articles 
      && 
      <NewsList articles={ articles } />
      }
    </div>
  )
}

export default NewsPage
