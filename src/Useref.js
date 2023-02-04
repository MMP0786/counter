import React, { useRef } from 'react'

function Useref() {
    const myRef = useRef()
    const nameRef = useRef()
    const ageRef = useRef()
    
    const handleChange = () =>{
        myRef.current.align ="center"
        ageRef.current.hidden  =true
        nameRef.current.focus() 
        // console.log(myRef)
        console.log(nameRef.current.value)
    }
  return (
    <div>
        <form >
            <input ref={nameRef} type="text" name="name" />
            <br /><br></br>
            <input ref={ageRef} type="text" name="age" />
        </form>
        <p ref={myRef} >Lorem ipsum dolor sit amet.</p>
        <button onClick={handleChange}>Use Ref Updation</button>
    </div>
  )
}

export default Useref