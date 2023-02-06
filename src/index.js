import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Axios from './Axios';
import FormwithFormik from './FormwithFormik';
// import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import Newsearch from './Newsearch';
// import Search from './Search';

// import App from './App';
// import Comp2 from './Comp2';
// import Class1 from './Class1';
// import ListRender from './ListRender';
// import UseStateObj from './UseStateObj';
// import UseState from './UseState';
// import Formhandling from './Formhandling';
// import Checkbox from './Checkbox';
// import Checkbox1 from './Checkbox1';
// import Useref from './Useref';
// const Comp1 = lazy(()=> import("./Comp1"))
// const Comp2 = lazy(()=>import("./Comp2") )


const root = ReactDOM.createRoot(document.getElementById('root'));
// const arr1 = [2, 45, 46]

// const handle = ()=>{
//   console.log("hello from root")
// }
root.render(
  
 <>
 <FormwithFormik/>
 {/* <Search/> */}
 {/* <Axios/> */}
 {/* <Newsearch/> */}
 {/* <h1> lazy Loading Demo</h1>
 <Suspense fallback={<div>Loading .... Comp1</div>}>
  <Comp1/>
 </Suspense>
 <Suspense fallback={<div>Loading .... Comp2</div>}>
  <Comp2/>

 </Suspense> */}
{/* <BrowserRouter> */}
    {/* <App/> */}
    {/* <Useref></Useref> */}
{/* </BrowserRouter> */}
 {/* <Useref></Useref> */}
 {/* <Checkbox1></Checkbox1> */}
  {/* <Formhandling/> */}
  {/* <Checkbox></Checkbox> */}


 {/* <UseStateObj></UseStateObj> */}
 {/* <UseState></UseState> */}
 {/* <ListRender></ListRender> */}
{/* <Class1 name="Adil" fun ={handle}>
  this is children of class 
 </Class1> */}
 {/* <App name="Adil" >
  <h3>this is 2nd child</h3>
 </App>
<App name={"Musharraf"} age={34} arr={arr1[0] } bool={false}>
  <h5> this is  my child</h5>
 </App> */}

 </>
);


