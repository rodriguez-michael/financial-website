const sendPublicToken = async (plaid_token) => {
  let django_token = localStorage.getItem('auth-user')
  let response = await fetch('http://localhost:8000/api/senddjangothepublictoken/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${django_token}`
    },
    body: JSON.stringify({'public_token': plaid_token})
  })
  return response
}


const getLinkToken = async () => {
  let django_token = localStorage.getItem('auth-user')
  let response = await fetch('http://127.0.0.1:8000/api/getlinktokenfromplaid/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${django_token}`
    }
  })
  return response
}


const getTransactions = async () => {
  let django_token = localStorage.getItem('auth-user')
  let response = await fetch('http://localhost:8000/api/transactions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${django_token}`
    },
  })
  return response
}


const getAccountInfo = async () => {
  let django_token = localStorage.getItem('auth-user')
  let response = await fetch('http://localhost:8000/api/accountinfo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${django_token}`
    },
    // body: JSON.stringify({'public_token': plaid_token})
  })
  return response
}


const PlaidAPI = { 
  sendPublicToken, 
  getLinkToken,
  getTransactions,
  getAccountInfo,
}

export default PlaidAPI
