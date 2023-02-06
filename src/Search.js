import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
   const {searchParams, setSearchParams}= useSearchParams()

//    const handleSubmit =(e) =>{
//     e.preventDefault()
//     let data =paramSearch.get("q")
//     console.log(data)
//     alert(data)
//    }
  return (
    <div>
        <form >
            <input type="text" placeholder='Search your Query' onChange={(e)=> setSearchParams({q: e.target.value})}/>
            <input type="submit" value="Search" />
        </form>

    </div>
  )
}

export default Search;