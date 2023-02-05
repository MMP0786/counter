import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    
    function navigateTo(){
      navigate("/form")

    }
  return (
    <div>
        <NavLink to="/"> Home</NavLink>  &nbsp;
        <NavLink to="/other"> Form</NavLink> &nbsp; &nbsp;
        <NavLink to="product">Product</NavLink><br></br>
        {/* <button onClick={()=>navigate("/about")}> Home</button> */}
        <button onClick={()=>navigateTo()}> Home</button>
    </div>
  )
}

export default Navbar;