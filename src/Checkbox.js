import React, { useState } from "react";

function Checkbox() {

  const [text, setText] = useState("");
  const [check, setCheck] = useState("");
  const [selectText, setSelectText] = useState("UK");

  const handleSubmit = (e) =>{
    e.preventDefault(
      console.log(e.target[0].value),
      console.log(e.target[1].checked),
      console.log(e.target[2].value),
      setText('')
    )
  }

  return (
    <div>
      <p>{text}</p>
      <p>{ check.toString()}</p>
      <p>{ selectText}</p>
      <form onSubmit={handleSubmit}>
        <textarea name="text" id="" cols="30" rows="3" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <br></br>
        <p>are you agree</p>
        <input type="checkbox" name="" id=""  value={check} onChange={(e)=>setCheck(e.target.checked)}/>
        <br></br>
        <p>Select</p>
        <select name="" id="" value={selectText} onChange={(e)=>setSelectText(e.target.value)}>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="DELHI">DELHI</option>
          <option value="MI">MI</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Checkbox;
