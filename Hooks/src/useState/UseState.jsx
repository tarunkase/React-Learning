import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount]=useState(0)
    // function Increase(){
      // setCount (count +3);

      // setCount(prev=>prev+1);
      // setCount(prev=>prev+1);
      // setCount(prev=>prev+1);
      // setCount(prev=>prev+3);
    // }


  return (
    <div className='  '>
      <div className='flex justify-center intem-center '>
        <button onClick={()=>{setCount(count=>count+1)}} className='bg-indigo-200 rounded-sm p-2 m-1 border'>Increase </button> {/* <button onClick={Increase} className='bg-indigo-200 rounded-sm p-2 m-1 border'>Increase</button> */}
        <button onClick={()=>{setCount(count=>count-1)}} className='bg-indigo-200 rounded-sm p-2 m-1 border'>Decrease </button>
        
      </div>
      
        <div className='flex justify-center bg-gray-400 m-2 p-2 rounded-sm'>{count}</div>
        <div className='flex justify-center w-full'>
          <button onClick={()=>{setCount(0)}} className='bg-indigo-200 rounded-sm p-2 border'>reset value</button>
        </div>
    </div>
  )
}

export default UseState