import React, { useState } from 'react'

export function Form() {

    const prolife = {
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: '',
        favColor: ''

    }

    const [user, serUser] = useState(prolife)

    // const handleChange = (event, info) => {
    //     serUser({...user, [info]: event.target.value})
    // }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        serUser({ ...user, [name]: type === 'checkbox' ? checked : value }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)

    }
    return (

        // using name to get the params
        <form onSubmit={handleSubmit}>
            <h1>{user.firstName} {user.lastName} {user.email} </h1>
            <p>{user.comments}</p>
            <input type="text" placeholder='First Name:'
                name='firstName'
                value={user.firstName}
                onChange={handleChange}
            />
            <input type="text" placeholder='Last Name:'
                name='lastName'
                value={user.lastName}
                onChange={handleChange} />
            <input type="text" placeholder='E-mail:'
                name='email'
                value={user.email}
                onChange={handleChange} />
            <textarea name="comments"
                value={user.comments}
                onChange={handleChange} />
            <input type="checkbox"
                id='isFriendly'
                name='isFriendly'
                checked={user.isFriendly}
                onChange={handleChange} />
            <label htmlFor="isFriendly">Are u Friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>
                <input type="radio"
                    id='unemployed'
                    name='employment'
                    value='unemployment'
                    checked={user.employment === 'unemployment'}
                    onChange={handleChange} />
                <label htmlFor="Unemployed">Unemployment</label>
                <br />

                <input type="radio"
                    id='part-time'
                    name='employment'
                    value='part-time'
                    checked={user.employment === 'part-time'}
                    onChange={handleChange} />
                <label htmlFor="Part-time">Part time</label>
                <br />

                <input type="radio"
                    id='full-time'
                    name='employment'
                    value='full-time'
                    checked={user.employment === 'full-time'}
                    onChange={handleChange} />
                <label htmlFor="full-time">Full time</label>
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor"
                value={user.favColor}
                onChange={handleChange}>
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
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
