import { useState } from 'react'
// import InputDisplay from './concepts/InputDisplay'
// import Subjext from './concepts/Subjext'

function App()  {
  
  const [task, setTask]=useState("");

  const [tasks, setTasks]=useState([]);

  function addTask(){
    if (task.trim() === "") {
      return;
    }

    setTasks(prevTasks=>[...prevTasks,
      {
      text:task.trim(),
      completed:false
    }]);
    setTask("");
  }

  function deleteTask(deleteIndex){
    setTasks(prevTasks=>prevTasks.filter(
      (item, index)=> index !==deleteIndex))
  }

  function toggleTask(taskIndex){
    setTasks(prevTasks=>
      prevTasks.map((item,index)=>index===taskIndex
        ?{...item, completed:!item.completed}:item
      )
    );
  }

  return (
    <div className='mx-auto max-w-md p-6 flex justify-center '>
      

    <section className='todoapp bg-[#fff8ec] rounded-2xl p-3 '>
      <h1 className='mb-4 text-4xl font-bold flex justify-center'>
        To Do App
      </h1>
      <div className=' justify-center '>
          <ul className='list-none p-2 justify-center'>
            {tasks.map((item,index)=>(
       
              <li 
                  className='bg-[#faf8f3] items-center border rounded-xl gap-3 p-3 mb-2 flex justify-center border-black '
                  key={index}>
                    <input 
                      type='checkbox'
                      checked={item.completed}
                      onChange={()=>toggleTask(index)}
                      className='cursor-pointer size-4 hover:scale-103 transition-transform '
                      /> 
                    <span 
                          className={`flex-1 wrap-break-word 
                                      ${item.completed
                                        ?"text-gray-500 line-through "
                                        :""
                                      }`} >
                          {item.text}
                    </span>
                     
                  <button id='del'
                    onClick={()=>deleteTask(index)} 
                    className='px-2 py-1 border rounded-xl text-red-500
                             border-red-700 hover:bg-red-700 hover:text-white 
                             hover:scale-104 transition-transform hover:rounded-1xl'
                  >
                      Delete</button>
                </li>
            ))}
          </ul>

      </div>
        <div className='flex justify-between'>
          <input 
            placeholder='Enter the task'
            className='min-w-0 flex-1 bg-[#e1dbcf] rounded-xl p-2 m-1  hover:scale-103 transition-transform'   
            value={task}
            onChange={(elem)=>setTask(elem.target.value)} 
            onKeyDown={(e)=>{
              if (e.key=== "Enter") {
                addTask();
              }
            }}
            />

          <button
            className='rounded-xl bg-[#B85C42] px-3 py-2 text-white m-1 hover:scale-103 transition-transform'   
            onClick={addTask}>
              + Add Task
              </button>
      
         
        </div>
         <div className='mt-3 text-sm flex'>
             Completed: <p className='text-green-500 px-1'> {tasks.filter(item=>item.completed).length}</p>
            {" / "}
            {tasks.length}      
          </div>
    </section>

    </div>
  )
}

export default App