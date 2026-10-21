
// import { useState } from "react";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const [newTask, setNewTask] = useState("");

// function addTask() {
//   setTasks([...tasks, task]);
//    setNewTask("")
// }

//   // function addTask() {
//   //   // 1. Input रिकामा नसेल तर task add कर
//   //   // 2. Spread operator वापर
//   //   // 3. Input रिकामा कर
//   // }


// function deleteTask(indexToDelete) {
//   setTasks(tasks.filter(
//     (task, index) => index !== indexToDelete
//   ));
// }

//   // function deleteTask(indexToDelete) {
//   //   // filter() वापरून task delete कर
//   // }

//   return (
//     <div className="mx-auto max-w-md p-6">
//       <h1 className="mb-4 text-2xl font-bold">
//         My To-Do List
//       </h1>

//       <div className="mb-4 flex gap-2">
//         <input
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter a task"
//           className="min-w-0 flex-1 rounded border p-2"
//         />

//         <button
//           onClick={addTask}
//           className="rounded bg-blue-600 px-4 text-white"
//         >
//           Add
//         </button>
//       </div>

//       {tasks.map((task, index) => (
//         <div
//           key={index}
//           className="mb-2 flex items-center justify-between rounded border p-3"
//         >
//           <span>{task}</span>

//           <button
//             onClick={() => deleteTask(index)}
//             className="text-red-500"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



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

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(deleteIndex){
    setTasks(tasks.filter(
      (task, index)=> index !==deleteIndex))
  }



  return (
    <div className='flex justify-between items-center text-center '>

    <section className='todoapp'>

      <div className='bg-amber-50 size-fit border rounded p-2 m-2 '>
          <input 
            className='bg-gray-50 border rounded p-1 m-1'
            value={task}
            onChange={(elem)=>setTask(elem.target.value)} />

          <button
            className='bg-gray-50 border rounded p-1 m-1' 
            onClick={addTask}>Add Task</button>

          <ul className=' p-1 m-1 '>
            {tasks.map((item,index)=>(
              <li key={index}>{item} 
                  <button 
                    onClick={()=>deleteTask(index)}
                    className='border rounded p-1 m-1 text-red-500 border-red-600 bg-amber-100'>Delete</button></li>
            ))}

          </ul>
      </div>

    </section>



      {/* <InputDisplay />
      <Subjext /> */}
    </div>
  )
}

export default App