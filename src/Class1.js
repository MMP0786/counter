import React from 'react'


export default class Class1 extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         first: "Musharraf",
         lastName: 'Panwar',
         count : 0
      }
    }
    setName =()=>{
         this.setState({
            first: "Panwar",
            lastName: "Musharraf1",
            count : this.state.count+1
        })
    }

    change =( a)=>{
        alert('this is alret'+" "+  a)
    }

    render(){
        return(
            <>
            
<h1>this is h1  {this.state.first} and {this.state.lastName} {this.props.handle} {this.state.count}</h1>
{/* {this.props.children} */}
{/* <button onClick={()=>  this.setName()}>Change </button> */}
<input type="button" value={"Change"} onClick={this.props.fun}/>
<input type="button" value={"Change1"} onClick={() =>this.change(this.props.name)  }/>
            </>
        )
    }
}