import React from 'react'
import CardComponent from './components/CardComponent';
import id1 from "./assets/ID-PD.jpg";
import id2 from "./assets/ID-TK.jpg"


function App() {
  return (
    <>
     
      <CardComponent userName="Priyanka Copade" age={24} city="Pune" img={id1}/>
      <CardComponent userName="Tarun Kase" age={25} city="Kolhapur" img={id2}/>
    </>
  )
}

export default App
