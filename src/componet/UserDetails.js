import React from 'react'
import { useParams } from 'react-router-dom';

function UserDetails() {
    const {id} =useParams()
    // const userId =useParams()
    // const id = userId.id;

  return (
    <div>UserDetails {id}</div>
  )
}

export default UserDetails;