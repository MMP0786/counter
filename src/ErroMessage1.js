import { ErrorMessage } from 'formik';
import React from 'react'

function ErroMessage1({name}) {
  return (
    <div style={{color:"red"}}>
        {/* <ErroMessage name='name'/> */}
        <ErrorMessage name={name}/>
    </div>
  )
}

export default ErroMessage1;