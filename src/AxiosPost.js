import Axios from "axios";
import React, { useEffect } from "react";

const url = "https://twitter-backend-6yot.onrender.com/tweet/create',";

function AxiosPost() {
    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")

 
 const handleSubmit = (e) =>{
    e.preventDefault()

    Axios.post(url, {
        name: title,
        age: body
      }).then((res)=>{
          console.log(res)
      }).catch((err)=>{
          console.log(err)
      });

    setTitle('')
    setBody('')
    // console.log(title, body)
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title : </label>
        <input
          type="text"
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>

        <label htmlFor="">Body : </label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br></br>
        <input type="submit" value="Submit" />
      </form>
      <h1> this is h1</h1>
    </div>
  );
}

export default AxiosPost;
