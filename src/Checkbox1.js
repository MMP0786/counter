import React from "react";

function Checkbox1(){
    const [fruitArr, setFruitArr] = React.useState([])

    const handleChange =(e)=>{
        let checked= e.target.checked;
        let value = e.target.value

        console.log(value, checked)
        if(checked){
            setFruitArr([...fruitArr, value ])
        }else{
            setFruitArr(fruitArr.filter((e)=>(e!==value)))
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(fruitArr)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" name="fruits" value=" Grapes" onChange={handleChange} />
                Grapes: <br></br>
                <input type="checkbox" name="fruits" value=" Apple" onChange={handleChange} />
                Apple: <br></br>
                <input type="checkbox" name="fruits" value=" Mango" onChange={handleChange} />
                Mango: <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Checkbox1;

// import React, { useState } from 'react'

// function Checkbox1() {
//     const [value, setValue] = useState([])

//     const handleChange = (e)=>{
//         const name = e.target.value
//         const checked =  e.target.checked
//         console.log(name, checked)

//         if(checked){
//             setValue([
//                 ...value, name
//             ]
//             )
//         }else{
//             setValue(value.filter((e)=> (e!==name)))
//         }
        
//         // console.log(name, checke);
//     }
    
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log(value)
//         // if(checked){
//         //     setValue({
//         //         ...value, value
//         //     })
//             // console.log(value)
//         }
    

//   return (
//     <div>
//        <form onSubmit={handleSubmit}>
//        Grapes: <br></br>
//         <input type="checkbox" name="fruit" value="grapes" onChange={handleChange }  />
//         Apple: <br></br>
//         <input type="checkbox" name="fruit" value="Apple" onChange={handleChange }  />
//         Mango: <br></br>
//         <input type="checkbox" name="fruit" value="Mango" onChange={handleChange }  />
//         Lichi: <br></br>
//         <input type="checkbox" name="fruit" value="Lichi" onChange={handleChange }  />
//         <input type="submit" value="Submit" />
//        </form>
//     </div>
//   )
// }

// export default Checkbox1