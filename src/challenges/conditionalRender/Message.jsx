import React from "react"

export  function Message() {
    const [messages, setMessages] = React.useState([])
     /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */

    let aux = ''
    if(messages.length === 0) aux = "You're all caught up!"
    if(messages.length > 1)  aux = `You have ${messages.length} unread message(s)`
    if(messages.length === 1) aux = `Massage: ${messages[0]}`

    console.log(messages === true)
    return (
        // <div>
        //     {<h1> {aux} </h1>}
        // </div>
        <div>
        {
            messages.length === 0 ?
            <h1>You're all caught up!</h1> :
            <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>
        }
    </div>
    )
}
