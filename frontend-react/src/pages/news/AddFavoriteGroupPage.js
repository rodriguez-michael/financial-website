import React, { useState, useContext } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';

const AddFavoriteGroupPage = () => {

  const [redirect, SetRedirect] = useState(false)
  const userContext = useContext(UserContext)

  // Handle form submission for new category
  const handleNewSubmit = (event) => {
    event.preventDefault()
    try{
      const categoryNewObject = {
        name: event.target.name.value,
        user: userContext.user.id
      }
      NewsAPI.newFavoriteCategory(localStorage.getItem('auth-user'), categoryNewObject)
      SetRedirect(true)
    }
    catch(error){
      console.error(error)
    }
  }

  // Redirect back to all categories after form submission
  if (redirect && userContext.user) {
    return <Redirect to = {"/news/favorites"} />
  }

  return (
    <div>
      <div>
        <h1>New Category</h1>
        <Link to={'/'}>Home</Link>
        <span> | </span>
        <Link to={'/categories'}>Back to all Categories</Link>
        <hr></hr>
      </div>

      <div>
        <form onSubmit={handleNewSubmit}>
          <label>Name: </label>
          <input type='text' name='name' placeholder='Favorites on Stocks' required/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddFavoriteGroupPage
