import { useState } from 'react'
import './App.css'
import UseState from './useState/UseState'
import LikeButton from './useState/LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>


        <UseState />
        <LikeButton />
      </section>

    </>
  )
}

export default App
