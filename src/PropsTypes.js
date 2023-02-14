import React from 'react'
import PropTypes from 'prop-types'

function PropsTypesExample(props) {
  return (
    <div>
       <h1 > {props.name} this is example</h1>
    </div>
  )
}
PropsTypesExample.propsTypes={
  name: PropTypes.toString(),
  age: PropTypes.number,
}

export default PropsTypesExample