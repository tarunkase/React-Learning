import React from 'react'
import Trial from './try'

const App = () => {
  return (
    <>
      {/* this above empty tags are called as fragments it's just wrappers to add multiple tags in it it doesn't get displayed on browser*/}

      {/* we use this karan aapan mutiple div or multiple tags return nahi karu shakat. tyasathi mg aapan sagale tags he eka div madhech include karave lagnar otherwise div nako asla tr mg he as frament karayache */}

      <div className="parent-class">
        <h1>Hello from parent class and even I am first child</h1>
        <h2>second child</h2>
      </div>
      
      <div className="sibling">
        <h1>Hello from sibling class child</h1>
      </div>
      <div> This is first react learning project | Tarun Kase</div>


      <Trial />
    </>
  )
}

export default App