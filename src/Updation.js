import React, { Component } from 'react'

export default class Updation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name2: this.props.name
      }
    }
    static getDerivedStateFromProps(props, state){
        if(props.name !== state.name2){
            return{ name2: props.name}
        }
        return null;
    }
  render() {
    return (
      <div>Updation name {this.state.name2}</div>
    )
  }
}
