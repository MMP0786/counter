// import React, { Component } from 'react'

// export default class UseState extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         counter: 0    
//       }
//     }

//     upVoteBtn =()=>{
//         this.setState({
//             counter: this.state.counter +1
//         })
//       }
//       downVoteBtn =()=>{
//         this.setState({
//             counter: this.state.counter -1
//         })
//       }
//   render() {
//     return (
//     <div>
//         <div>UseState {this.state.counter}</div>
//         <button onClick={this.upVoteBtn}>Update Counter</button>
//         <button onClick={this.downVoteBtn}>Down Counter</button>
//     </div>
//     )
//   }
// }



import React, { useEffect, useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);

    function increament(){
      setCount(count+1)
    }

    useEffect(()=>{
      setInterval(() => {
        setCount((count)=>{
          count+1
        })
      },  1500);
    },[count])

    // function increament(){
    //     if(count =='Zain'){
    //      setCount("Musharraf");
    //     }else{f
    //         setCount('Zain')
    //     }
    // }

  return (
    <>
    <div>{count}</div>
    <div><button onClick={increament}>increament</button><button onClick={()=>setCount(count-1)}>decreament</button></div>
    </>
  )
}
