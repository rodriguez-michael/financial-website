import React, { useState, useContext } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import { Redirect } from 'react-router'
import UserContext from '../../contexts/UserContext';

const EditFavoriteGroupPage = (props) => {

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
      NewsAPI.editFavoriteCategory(localStorage.getItem('auth-user'), categoryNewObject, props.match.params.listID)
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
          <h1>Edit List Name</h1>
          <hr></hr>
          <form onSubmit={handleNewSubmit}>
            <label>Name: </label>
            <input type='text' name='name' placeholder='Favorites on Saving $' required/>
            <button>Submit</button>
          </form>
        </div>
  )
}

export default EditFavoriteGroupPage
