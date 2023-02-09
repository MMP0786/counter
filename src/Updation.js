import React, { Component, createRef } from "react";

export default class Updation extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();

    this.state = {
      name2: this.props.name,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name2) {
      return { name2: props.name };
    }
    return null;
  }
  componentDidMount() {
    // this.myRef.current.style = "red";
    console.log(this.myRef);
  }
  render() {
    return (
      <>
      <h1 ref={this.myref}>this is my h1 tag for using ref</h1>
        <div >Updation name {this.state.name2}</div>
      </>
    );
  }
}
