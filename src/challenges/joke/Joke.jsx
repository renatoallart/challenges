import React, { useState } from "react"



export function Jokes(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShow] = useState(false)

  
    const toggle = () => setIsShow(
       isShown ? false : true
    )

    const toggle2 = () => setIsShow(
        prev => !prev
        
     )
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {<button onClick={toggle2}> {isShown ? "Hide" : "Show"} PuchLine</button>}
            <hr />
        </div>
    )
}