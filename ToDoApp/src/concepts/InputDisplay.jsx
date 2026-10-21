import React, { useState } from 'react'

const InputDisplay = () => {
    const [name, setName]=useState("")      //ithe input madhala text store aahe or hi state input madhala text thevate
    const [newName, setNewNames]=useState([])     //ithe saglya names chi list aahe or hya state madhe new names chi list aahe 

    function addName(){
        if (name.trim()==="") {
            return;
        }
        setNewNames([...newName, name])
        setName("");
    }

    function deleteName(indexToDelete){
        setName(newName.filter(
            (newName, index)=>index!== indexToDelete
        ));
    }

    // function deleteTask(indexToDelete) {
//   setTasks(tasks.filter(
//     (task, index) => index !== indexToDelete
//   ));
// }
  return (
    <div>


      <input 
            placeholder='Enter name' 
            className='p-2 border rounded bg-gray-50 hover:transition-transform '
            type='text' 
            value={name} 
            onChange={(elem)=>setName(elem.target.value)} 
      />

        <button onClick={addName}  className='border p-1 m-1 rounded '>add</button>

        <ul >
            {newName.map((item,index)=>(
            <li key={index}>{item} 
            <button
            onClick={() => deleteName(index)}
            className="text-red-500 border rounded m-4 p hover:bg-amber-50">
            Delete
          </button>
            </li>))}
        </ul>
    </div>
  )
}

export default InputDisplay