import React from 'react'
import { Link } from 'react-router-dom'
import PuppyError from '../images/PuppyError.jpg'

const NotFoundPage = () => {

  return (
    <div>
      <div>
        <h1 style={{marginTop: '50px', marginBottom: '50px'}}><Link key={'Home'} to={`/`} style={{marginTop: '50px', marginBottom: '50px', color: 'green'}}>Go to Home Page</Link></h1>
      </div>

      <div>
      <img src={PuppyError} alt="Error"/>
      </div>
    </div>
  )
}

export default NotFoundPage