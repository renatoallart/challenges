import React, { useState } from 'react'
import { Box } from './challenges/box/Box'
import List from './challenges/list/List'
import { Jokes } from './challenges/joke/Joke'
import { Count } from './challenges/count/Count'
import jokesData from './challenges/joke/jokesData'
import { Message } from './challenges/conditionalRender/Message'
import { Form } from './challenges/form/Form'
import { SingUp } from './challenges/singUpForm/SingUp'



export default function App() {

  const jokeElements = jokesData.map(joke => {
    return (
        <Jokes
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    )
})

  return (
    <>
    {/* {jokeElements} */}
    {/* <Message/> */}
    {/* <Form/> */}
    <SingUp/>
    </>
  )
}
