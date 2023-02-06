import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserDetails from './UserDetails'

function User() {
  return (
    <>
    <div>User All</div>
    <h1>
        <Link to="/user/1">user1 </Link>
    </h1>
    <h1>
        <Link to="/user/2">user2 </Link>
    </h1>
    <h1>
        <Link to="/user/3">user3 </Link>
    </h1>
    <Outlet/>
    </>
  )
}

export default User