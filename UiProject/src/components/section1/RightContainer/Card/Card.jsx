import React from 'react'
import CardImage from './Containent/CardImage'
import CardText from './Containent/CardText'

const RightCard = (props) => {
  return (

    <>
<div className='flex h-fit shrink-0 rounded-4xl w-80 overflow-hidden relative'>
      <div>
        <CardImage image={props.image} />
        <CardText id={props.id} caption={props.caption} btnBg={props.btnBg} tag={props.tag} />
      </div>
        
</div>

    </>
    

    
  )
}

export default RightCard