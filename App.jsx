import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)
  // let counter=0; 

  const addValue=()=>{
    // counter=counter + 1;
    setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }



  let [origiaPrice, setMRP]=useState(1000);

const updateMrp=()=>{
  let discount=origiaPrice/10;

  setMRP(origiaPrice-discount);
}


let [name, setName]=useState("Tarun")

const updatName=()=>{
  setName("Priyanka")
}

  return (
    <>
    <h1>Tarun and React</h1>
    <h2>counter value is : {counter}</h2>
    <button onClick={addValue}>
      Add value</button>
    <br />
    <button onClick={removeValue}>Decrease value</button>


    <h3>Original Price: {origiaPrice}</h3>
    <button onClick={updateMrp}>Get discount </button>



  <h2>My name is {name}</h2>
    <button onClick={updatName}>Update Name</button>
    </>
  )
}

export default App
