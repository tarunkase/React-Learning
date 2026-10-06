import React from 'react'
import Card from './Card/Card'

const RightContainer = (props) => {
  return (
    <div id='right' className=' flex-nowrap overflow-x-auto  h-[80vh] p-4 w-2/3 flex gap-5 rounded-2xl' >
      
      {props.users.map(function(elem, idx){
        return <Card key={idx} id={idx} btnBg={elem.btnBg} caption={elem.caption} image={elem.image} tag={elem.tag} />
      })} 

    </div>
  )
}

export default RightContainer