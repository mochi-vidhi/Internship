import React, { useEffect, useState } from 'react'

export default function Food() {
    const [user,setUser]  = useState("");
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then((response)=>(response.json()))
        .then(json=>(setUser(json)))
    })
  return (
    <div>
       <p>{user.idMeal}</p>
    </div>
  )
}

