import React from 'react'

const Image = (props) => {
  return (
    <div>        
          <div className='h-100 '>
              <img src={props.images} className=' h-full w-full rounded-sm object-cover'></img>
          </div>
    </div>
  )
}

export default Image