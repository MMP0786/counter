import React, { useState } from 'react'

function UseStateObj() {
  const [obj, setObj] = useState({
    name: "Mohd",
    mname: "Musharraf",
    sname: "Panwar",
    age:21
  })
const updateInfo =()=>{
  setObj(pre => {
    return {
      ...pre, mname:'adil'
    }
  })
}
  
  return (
    <div>
      <div> {obj.name}</div>
      <div> {obj.mname}</div>
      <div> {obj.sname}</div>
      <div> {obj.age}</div>
      <button onClick={updateInfo}>Update Info</button>

    </div>
  )
}

export default UseStateObj;