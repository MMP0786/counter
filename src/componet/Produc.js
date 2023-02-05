import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Produc() {
  return (
    <>
    <div>Produc</div>
    <nav>
        <Link to="shirt">Shirt</Link> &nbsp;
        <Link to="form">ListRender</Link>
        {/* <Link> second Contact</Link> */}
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Produc