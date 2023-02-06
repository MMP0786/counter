import React, { useEffect } from "react";
// import profile from './image/profile_img1.jpg'
// import second from "./image/profile_img2.jpg"

function Comp1() {
  const styled = {
    maxHeight: "500px",
    width: "90%",
    border: "1px solid red",
    margin: "auto",
    marginTop: "10px",
  };

  const [state, setState] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      res.json().then((result) => {
        setState(result);
        // console.log(result)
      });
    });
  }, []);
  console.log(state);
  return (
    <>
      {/* <div>Comp1</div> */}
      {/* <img src={profile}  height={150}/>
    <img src={second}  height={150}/>
    <img src={profile}  height={150}/>
    <img src={second}  height={150}/> */}
      {state.map(
        (item) => (
          <div style={styled} key={item.id}>
            <h1>{item.title.slice(0, 12).toUpperCase()}</h1>
            {item.body}
          </div>
        )

        // console.log(item)
        // console.log(item)
      )}
      <img src={require("./image/profile_img1.jpg")} width="120" />
      <img src={require("./image/profile_img1.jpg")} width={120}></img>
      <img src="image/profile_img1.jpg" width={120} />
    </>
  );
}

export default Comp1;
