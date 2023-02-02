import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Class1 from './Class1';
import ListRender from './ListRender';
import UseState from './UseState';


const root = ReactDOM.createRoot(document.getElementById('root'));
const arr1 = [2, 45, 46]

const handle = ()=>{
  console.log("hello from root")
}
root.render(
  
 <>
 <UseState></UseState>
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


