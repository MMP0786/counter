import React from "react";
import PropTypes from "prop-types"
import {  Routes, Route } from "react-router-dom";
// import Route from "./Route";
import ListRender from "./ListRender";
import Useref from "./Useref";
import Home, { Shirt } from "./componet/Home";
import Produc from "./componet/Produc";
import Navbar from "./Navbar";
import Error from "./Error";
function App ( props){
  // const arr1 = [2, 45, 46]
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/other" element={<Useref/>}/>
      <Route path="/" element={<Home/>}> 
      </Route>
      <Route path="/product" element={<Produc/>}>
        <Route index element={<ListRender/>}/>
        <Route path="shirt" element={<Shirt/>}/>
        <Route path="form" element={<ListRender/>}/>

      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
    {/* <h1>this is my {props.name}</h1>
    <h1>my age = {props.age}</h1>
    <h1>my any = {props.arr} {props.bool}</h1>
  
    {props.children} */}
    </>
  )
}
// App.propTypes={
//   name : PropTypes.string.isRequired,
//   age : PropTypes.number,
//   arr : PropTypes.array,
//   // bool: PropTypes.bool.string()
// }

// App.defaultProps ={
//   age: 9
// }

export default App;