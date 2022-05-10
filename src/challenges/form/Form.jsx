import React, { useState } from 'react'

export function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const prolife = {
        firstName: '',
        lastName: ''

    }

    const [user, serUser] = useState(prolife)

    // const handleChange = (event, info) => {
    //     serUser({...user, [info]: event.target.value})
    // }

    const handleChange = (event) => {
        serUser({ ...user, [event.target.name]: event.target.value })
    }
    return (

        // using name to get the params
        <form >
            <h1>{user.firstName} {user.lastName}</h1>
            <input type="text" placeholder='First Name:'
                name='firstName'
                onChange={() => handleChange(event)}
            />
            <input type="text" placeholder='Last Name:'
                name='lastName'
                onChange={() => handleChange(event)} />

        </form>

        // using normal params
        // <form >
        //     <h1>{user.firstName} {user.lastName}</h1>
        //     <input type="text" placeholder='First Name:'
        //     onChange={ () => handleChange(event,'firstName')}
        //     />
        //     <input type="text" placeholder='Last Name:' 
        //     onChange={ () => handleChange(event,'lastName')}/>

        // </form>



        // <form >
        //     <h1>{user.firstName} {user.lastName}</h1>
        //     <input type="text" placeholder='First Name:' 
        //     onChange={event => serUser( {...user, firstName: event.target.value})} /> 
        //     <input type="text" placeholder='Last Name:'
        //     onChange={event => serUser( {...user, lastName: event.target.value})} /> 

        // </form>
    )
}
