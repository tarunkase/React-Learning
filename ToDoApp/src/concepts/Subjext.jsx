import { useState } from 'react'

const Subjext = () => {
  const [subject, setSubject]=useState("");

  const [subjects, setSubjects]=useState([]);

  function addSubject(){
    if(subject.trim() ===""){
      return;
    }
    
    setSubjects([...subjects, subject]);
    setSubject("");
  }


  return (
    <div className=''>
      <div className='flex'>
          <input value={subject} onChange={(elem)=>setSubject(elem.target.value)} className='bg-gray-50 border rounded p-2 m-2'/>
          <button onClick={addSubject} className='bg-gray-50 border rounded p-2 m-2' >Add Subject</button>
      </div>

    <ul>

      <ul className="mt-4 list-inside list-disc">
        {subjects.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ul>

    </div>
  )
}

export default Subjext