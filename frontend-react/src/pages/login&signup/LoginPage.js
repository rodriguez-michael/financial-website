import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import isLoggedInContext from '../../contexts/isLoggedInContext';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginPage = (props) => {

  const { handleLogin } = props
  const loggedInContext = useContext(isLoggedInContext)

  if (loggedInContext.isLoggedIn){
    return <Redirect to = {`/`} />
  }

  return (
    <div>
      <h1>Login Page</h1>
      <hr></hr>
      <Form onSubmit={handleLogin}>
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
            <Button type='submit' size="lg" color="primary">Login</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default LoginPage
