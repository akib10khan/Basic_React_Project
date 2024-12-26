import React, { useState} from 'react';
import Counter from './Counter';
export default function App() {
  // let name = ''
  //state
  const [names, setName] = useState('Neha')
  const handelclick = () => {
    setName('Akash');
  }
  return (
    <div>
      {/* <h1>Hello {names}</h1>
      <button onClick={handelclick}>Click</button> */}

    <Counter />
    </div>
  )
}
