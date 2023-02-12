import React, { Component } from 'react'

export default class Classpractice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("construtor clalled")
    }
   static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps called")
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }
  render() {
    return (
        <>
        console.log("rendered called")
      <div>Classpractice</div>
        </>
    )
  }
}
