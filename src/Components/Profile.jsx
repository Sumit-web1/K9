import React from 'react'
import { Link } from 'react-router-dom'
import OTP from './OTP'

function Profile() {
  return (
    <div>
      <Link to={'/home'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M20.9688 34.375L8.59375 22L20.9688 9.625M10.3125 22L35.4062 22" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Link>
      
    </div>
  )
}

export default Profile