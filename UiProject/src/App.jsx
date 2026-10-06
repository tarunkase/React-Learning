import React from 'react'
import Section1 from './components/section1/Section1'

import Section2 from './components/section2/Section2'


const App = () => {
  const users=[
    {
      image:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption:"Yesterday the blue potato was running across the internet because my chair forgot how to become a refrigerator. Meanwhile, seven invisible elephants were discussing JavaScript",
      id:'',
      btnBg:'black',
      tag:'Satisfied'
    },
    {
      image:'https://i.pinimg.com/1200x/ea/bf/6e/eabf6e92452fadb7c9fc74b092cf1e89.jpg',
      caption:"Yesterday the blue potato was running across the internet because my chair forgot how to become a refrigerator. Meanwhile, seven invisible elephants were discussing JavaScript",
      id:'',
      btnBg:'green',
      tag:'Undervisioned'
    },
    {
      image:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption:"Yesterday the blue potato was running across the internet because my chair forgot how to become a refrigerator. Meanwhile, seven invisible elephants were discussing JavaScript",
      id:'',
      btnBg:'lightblue',
      tag:'Worth It'
    },
    {
      image:'https://plus.unsplash.com/premium_photo-1670884442927-e647436e12ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption:"Yesterday the blue potato was running across the internet because my chair forgot how to become a refrigerator. Meanwhile, seven invisible elephants were discussing JavaScript",
      id:'',
      btnBg:'royalblue',
      tag:'Unbelieveble'
    }
  ]
  return (
    <>
    {/* <div className='p-8 bg-amber-50 text-blue-400 border-b-cyan-400 border-2 rounded-4xl m-1 '>
      Yesterday the blue potato was running across the internet because my chair forgot how to become a refrigerator. Meanwhile, seven invisible elephants were discussing JavaScript with a sleepy spoon, but nobody understood because the moon was busy downloading a sandwich. I opened my laptop and found a banana wearing sunglasses, saying that React needs more ketchup and CSS should be cooked for exactly eleven minutes. Suddenly, the ceiling started sending emails to my shoes, while my phone became a potato and asked for Wi-Fi password. In conclusion, everything was completely normal except the fact that Tuesday had accidentally become a bicycle.


    </div> */}


    
<Section1 users={users}/>
<Section2 />
    </>
  )
}

export default App