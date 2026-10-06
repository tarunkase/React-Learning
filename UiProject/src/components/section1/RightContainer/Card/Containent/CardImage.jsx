import React from 'react'

const CardImage = (props) => {
  return (
    <div>
        <img className='h-full w-full object-cover' src={props.image} alt=''></img>

    </div>
  )
}

export default CardImage