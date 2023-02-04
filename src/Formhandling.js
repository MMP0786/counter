import React from "react";



// function Formhandling() {
//   const [value, setValue] = React.useState({
//     name: "",
//     email: " ",
//   });
//   // const [emailValue, setEmailValue] = React.useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//     setValue({
//       name: "",
//       email: "",
//     });
//   };

//   const handleChange = (e) => {
//     // name : e.target.name,
//     // value: e.target.value
//     setValue((pre) => {
//       return {
//         ...pre,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={value.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="text"
//           value={value.email}
//           onChange={handleChange}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Formhandling;

// import React from "react";

export default class Formhandling extends React.Component {

    state = {
      name: '',
      email: ''
    };

  handleClick =(e)=>{
    this.setState({
        [e.target.name]: e.target.value

    })
  }
  handleClickEmail = (e)=>{
    this.setState({
        emailValue: e.target.value
    })
  }
  handleSubmit= (e)=>{
    e.preventDefault()
    this.setState({
        name: "",
        email:''
    })
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleClick}
          />
          <p>{this.state.value}</p>
          <p>{this.state.emailValue}</p>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleClick}
          /><br></br>
          <div><input type="submit" /></div>
        </form>
      </div>
    );
  }
}
