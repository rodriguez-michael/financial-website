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




const fetchFavoriteLists = async (token, userID) => {
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/newslist?user=${userID}`, {
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


const newFavoriteCategory = async (token, categoryObject) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/newslist/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'POST',
      body: JSON.stringify(categoryObject)
    })
    return response
  }
  catch(error){
    console.error(error)
  }
};


const editFavoriteCategory = async (token, categoryObject, id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/newslist/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'PUT',
      body: JSON.stringify(categoryObject)
    })
    return response
  }
  catch(error){
    console.error(error)
  }
};


const deleteFavoriteCategory = async (token, id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/newslist/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'DELETE',
    })
    return response
  }
  catch(error){
    console.error(error)
  }
};


const deleteFavoriteArticle = async (token, id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/newsarticle/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'DELETE',
    })
    return response
  }
  catch(error){
    console.error(error)
  }
};

const addFavoritArticle = async (token, articleObject) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/newsarticle/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'POST',
      body: JSON.stringify(articleObject)
    })
    return response
  }
  catch(error){
    console.error(error)
  }
}





const NewsAPI = { 
  fetchArticles,
  fetchFavoriteLists,
  fetchFavoriteNewsListByID,
  fetchFavoriteArticles,
  newFavoriteCategory,
  editFavoriteCategory,
  deleteFavoriteCategory,
  deleteFavoriteArticle,
  addFavoritArticle

}

export default NewsAPI

