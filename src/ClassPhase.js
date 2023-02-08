import React, { Component } from 'react'
import Updation from './Updation'

export default class ClassPhase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name1: 'Mohd'
      }
    }

    handleClick = () =>{
        this.setState({
            name1: "Musharraf"
        })

        console.log("inside change fn")
    }
  render() {
    return (
      <div>
        <h1>class pshase</h1>
        <Updation name={this.state.name1}/>
        <button onClick={this.handleClick}>Change Text</button>
      </div>
    )
  }
}
