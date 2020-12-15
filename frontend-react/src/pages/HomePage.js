import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext';


const HomePage = () => {

  const userContext = useContext(UserContext)

  return (
    <div>
      <h1>Home Page</h1>
      {
        userContext.user 
        && 
        <div>
          <h2>Hi! {userContext.user.first_name} '{userContext.user.username}' {userContext.user.last_name}</h2>
        </div>
      }
    </div>
  )
}

export default HomePage
