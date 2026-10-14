import React from 'react'

const Head = (props) => {
  return (
    <div>
        <div style={{backgroundColor:[props.bg]}} className='bg-gray-50 rounded-sm p-2 mb-1 '> 
              {props.head}
        </div>
    </div>
  )
}

export default Head