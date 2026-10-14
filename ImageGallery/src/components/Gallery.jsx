import React from 'react'
import Card from './Card'

const Gallery = (props) => {
    
  return (
    <div id='scroller' className='flex flex-nowrap overflow-x-auto m-1  rounded-2xl'> 
    {/* //  justify-between items-center gap-2  */}
                {props.gallery.map(function(elem){
            return <Card head={elem.head} images={elem.images} caption={elem.caption} bg={elem.bg}/>

        
          })} 
    </div>
  )
}

export default Gallery