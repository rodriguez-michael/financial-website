const login = async (userCredentials) => {
  let response = await fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  })
  return response
}

const getLoggedInUser = async (token) => {
  let response = await fetch('http://localhost:8000/api/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  })
  return response
}


const signupUser = async (userCredentials) => {
  let response = await fetch('http://localhost:8000/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  })
  return response
}

const UserAPI = { 
  login, 
  getLoggedInUser, 
  signupUser 
}

export default UserAPI