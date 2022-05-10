import { useState } from "react"

export function Count(){
    const [count,setCount] = useState(0)
  
    const up = () => setCount( prev => prev +1)
    const down = () => setCount( prev => prev -1)
  
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={up}>UP</button>
        <button onClick={down}>DOWN</button>
      </div>
    )
  }
  