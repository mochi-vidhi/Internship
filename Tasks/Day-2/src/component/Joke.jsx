import React from 'react'
import { useState,useEffect } from 'react';

export default function Joke() {
    const [joke,setJoke] = useState('');

    const handleClick=()=>{
        fetch('https://v2.jokeapi.dev/joke/Programming')
        .then(response => response.json())
        .then(json=>setJoke(json))
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click</button>
         
          <p>{joke.category}</p>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>

      
    </div>
  )
}
