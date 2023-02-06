import React, { useEffect } from 'react'
import Axios from "axios"

const url = "https://jsonplaceholder.typicode.com/posts"

function Axioss() {
    const [myData, setMyData] = React.useState([])

    useEffect(()=>{
        Axios.get(url).then((res)=>{
            setMyData(res.data)
        })
    }, [])
  return (
   <>
   {myData.map(item=> <div style={{textAlign:"left", textAlign:"left"}}><h1>{item.title}</h1> <p>{item.body}</p></div>)}
    <div>{myData.id}</div>
    <h4>{myData.title}</h4>
    <div style={{textAlign:"left", columnCount:"3", columnFill:"auto"}}>{myData.body}</div>
   </>
  )
}

export default Axioss;