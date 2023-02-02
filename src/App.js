import React from "react";
import PropTypes from "prop-types"
function App ( props){
  // const arr1 = [2, 45, 46]
  return(
    <>
    <h1>this is my {props.name}</h1>
    <h1>my age = {props.age}</h1>
    <h1>my any = {props.arr} {props.bool}</h1>
  
    {props.children}
    </>
  )
}
App.propTypes={
  name : PropTypes.string.isRequired,
  age : PropTypes.number,
  arr : PropTypes.array,
  // bool: PropTypes.bool.string()
}

App.defaultProps ={
  age: 9
}

export default App;