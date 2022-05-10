import { useState } from 'react'
import boxData from './boxData'
import './box.css'

function Boxnes(props) {

  const style = {
    backgroundColor: props.on ? "black" : "#22222222"
  }
  return (
    <div className='box' onClick={() => props.handleClick(props.id)} style={style}> </div>
  )
}

export function Box() {
  const [square, setSquare] = useState(boxData)

const toggle = id => setSquare(preValue =>{
  return preValue.map(square => square.id === id ? {...square, on: !square.on} : square )
})

const miniToggle = id => setSquare(
  square.map(el => el.id === id ? {...el, on: !el.on} : el)
)















  // without prev values
  const test = id => setSquare( 
    square.map(el => el.id === id ? {...el, on: !el.on}: el))

  const squares = square.map(box => <Boxnes
    key={box.id}
    on={box.on}
    id={box.id}
    handleClick={miniToggle}
  > </Boxnes>)


  return (
    <div >
      {squares}
    </div>
  )
}
