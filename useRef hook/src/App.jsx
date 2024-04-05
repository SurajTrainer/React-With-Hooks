import React, { useRef, useState } from 'react'

const App = () => {

  const [name, setName] = useState('karan')
  const refElements = useRef('') 
  console.log(refElements);

  const Reset = () => {
    setName('')
    refElements.current.style.backgroundColor = '#fff'
  }

  
  const handleInput = () => {
      refElements.current.style.backgroundColor = 'yellow'
      refElements.current.value = 'surya'
  }

  return (
    <>
    <><h2>useRef example</h2></>
    <input ref={refElements} type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={Reset}>reset</button>
    <button onClick={handleInput}>handle input</button>
    </>
  )
}

export default App
