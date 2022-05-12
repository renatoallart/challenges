import React, { useState } from "react"
import './singUp.css'

export function SingUp() {
    const [singUp, setSingUp] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        sendNewsLetter: false
    })
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setSingUp(preValue => {
            return { ...preValue, [name]: type === 'checkbox' ? checked : value }
        })
    }

    const passwordValidation = () => {
        console.log(singUp.password === singUp.confirmPassword ? 
        "Successfully signed up" :
        "passwords to not match" )
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        passwordValidation()
        console.log(singUp.sendNewsLetter === true && "Thanks for signing up for our newsletter!")
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={singUp.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={singUp.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={singUp.confirmPassword}
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="sendNewsLetter"
                        checked={singUp.sendNewsLetter}
                        onChange={handleChange}

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"

                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
