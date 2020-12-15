const fetchArticles = async() => {
  try{
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37a71010a8544a4aba5a3600f2a66c2b')
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
};

const fetchFavoriteLists = async (token) => {
  try{
    const response = await fetch('http://127.0.0.1:8000/api/newslist/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`        
      }
    })
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
}


const fetchFavoriteNewsListByID = async (id, token) => {
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/newslist/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`        
      }
    })
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
}


const fetchFavoriteArticles = async (token) => {
  try{
    const response = await fetch('http://127.0.0.1:8000/api/newsarticle/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`        
      }
    })
    let data = await response.json()
    return data
  }
  catch(error){
    console.error(error)
  }
}


const NewsAPI = { 
  fetchArticles,
  fetchFavoriteLists,
  fetchFavoriteNewsListByID,
  fetchFavoriteArticles
}

export default NewsAPI