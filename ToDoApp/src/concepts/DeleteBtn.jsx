import React from 'react'

const DeleteBtn = () => {

    
  function deleteTask(deleteIndex){
    setTasks(prevTasks=>prevTasks.filter(
      (item, index)=> index !==deleteIndex))
  }
  return (
    <div>
        <button id='del'
                onClick={()=>deleteTask(index)} 
                className='px-2 py-1 border rounded  text-red-600
                         border-red-700 hover:bg-red-300 hover:text-red-800 
                           hover:scale-110 transition-transform' >
            Delete
        </button>
    </div>
  )
}

export default DeleteBtn