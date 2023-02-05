import React from 'react'
import Student from './Student'

function ListRender() {
    const arr =[
      {
        id:1,
        title: "first title",
        description: "Lorem ipsum dolor sit amet."
      },
      {
        id:2,
        title: "2 title",
        description: "Lorem ipsum dolor sit amet."
      },
      {
        id:3,
        title: "3 title",
        description: "Lorem ipsum dolor sit amet."
      },
    ]
  return (
    <>
    {/* {arr.map((item, index)=> <div key={item.id}><h1>{item.title}</h1>{item.description} </div> )} */}
    {arr.map((item, i)=><Student key={item.id} item={item}/>)}
    <h1>this is h1</h1>
    
    </>
  )
}

export default ListRender;