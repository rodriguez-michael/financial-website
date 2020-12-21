import React, { useState, useContext } from 'react'
import NewsAPI from '../../api/NewsAPI.js'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <hr></hr>
        <h1>Create a New Favorites List</h1>
        <Link to={'/news/favorites'} style={{color: 'green', fontSize: '25px'}}>Back to all Favorites</Link>
        <hr></hr>
      </div>

      {/* <div>
        <form onSubmit={handleNewSubmit}>
          <label>Name: </label>
          <input type='text' name='name' placeholder='Favorites on Stocks' required/>
          <button>Submit</button>
        </form>
      </div> */}

      <Form onSubmit={handleNewSubmit} style={{marginTop: '50px'}}>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="exampleEmail" sm={4}><h5>List Name:</h5></Label>
          <Col md={5}>
            <Input type="text" name="name" placeholder="List Name" required />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col md={{ size: 10, offset: 1 }}>
            <Button type='submit' size="lg" color="success">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      
    </div>
  )
}

export default AddFavoriteGroupPage
