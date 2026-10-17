import React, { useState } from 'react'

const UseState = () => {
    // let count=0;
    // function increase(){
    //     count=count+1;
    //     console.log(count)
    // }

    const [count, setCount]=useState(0)


  return (
    <div>
        {/* <button onClick={increase}>increase:{count}</button> */}

        <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>

    <button onClick={()=>{{setCount(count=>count-1)}}}>Decrease </button>

        <button onClick={()=>{setCount(0)}}>reset value</button>

        <div>{count}</div>
        
    </div>
  )
}

export default UseState