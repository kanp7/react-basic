import React, {useState} from 'react'

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log('clicked')
  }

  const [count, setCount] = useState(0)


  return (
    <>
      {/* <button onClick={() => setCount(count+1)}>count {count}</button> */}
      <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);} }>count {count}</button>
      <h1>hello {props.name}</h1>
      <h1>hello react2</h1>
    </>
  )
}

export default Basic1
