import React, { useState } from 'react'
import UserAPI from '../../api/UserAPI';
import { Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignupPage = () => {

  const [redirect, setRedirect] = useState(false)

  const handleSignup = async (event) => {
    event.preventDefault()
    let userCredentials = {
      first_name: event.target.firstname.value,
      last_name: event.target.lastname.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value
    }
    let response = await UserAPI.signupUser(userCredentials)
    let data = await response.json()
    console.log(data)
    if (data) {
      setRedirect(true)
    }
  }


  if (redirect) {
    return (
    <Redirect to='/login' />
    )
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <hr></hr>
      <Form onSubmit={handleSignup}>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="exampleEmail" sm={4}><h5>First Name:</h5></Label>
          <Col md={5}>
            <Input type="text" name="firstname" id="firstname" placeholder="first name" required />
          </Col>
        </FormGroup>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="exampleEmail" sm={4}><h5>Last Name:</h5></Label>
          <Col md={5}>
            <Input type="text" name="lastname" id="lastname" placeholder="last name" required />
          </Col>
        </FormGroup>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="exampleEmail" sm={4}><h5>Email:</h5></Label>
          <Col md={5}>
            <Input type="email" name="email" id="email" placeholder="email" required />
          </Col>
        </FormGroup>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="exampleEmail" sm={4}><h5>Username:</h5></Label>
          <Col md={5}>
            <Input type="text" name="username" id="username" placeholder="username" required />
          </Col>
        </FormGroup>
        <FormGroup row style={{textAlign: 'right'}}>
          <Label for="examplePassword" sm={4}><h5>Password:</h5></Label>
          <Col md={5}>
            <Input type="password" name="password" id="password" placeholder="password" required/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col md={{ size: 10, offset: 1 }}>
            <Button type='submit' size="lg" color="primary">Signup</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default SignupPage
