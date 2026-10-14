import React from 'react'
import Gallery from './components/Gallery'

const App = () => {
  const gallery=[
        {
          head:'Cillian Murphy',
          images:'https://i.pinimg.com/736x/7d/de/a7/7ddea7a80afa3006601d98548ff445f4.jpg',
          caption:'Italian Style',
          bg:'#640d14'
        },
        {
          head:'Wander',
          images:'https://i.pinimg.com/1200x/4d/c0/e4/4dc0e4d8f14a41e3bb4718a0d5b9f094.jpg',
          caption:'travels web ui',
          bg:'#8ecae6'
        },
        {
          head:'Alphama',
          images:'https://i.pinimg.com/736x/87/1d/24/871d241e31d0b4f7efc139487aee94ed.jpg',
          caption:'Image Gallery',
          bg:'#ced4da'
        },
        {
          head:'Ui Explorer',
          images:'https://i.pinimg.com/736x/78/b5/9b/78b59bf0c1e0dc5496fb643d9d58a59b.jpg ',
          caption:'Web Design Ui',
          bg:'#ca6702'
        },
        {
          head:'Alphama',
          images:'https://i.pinimg.com/736x/87/1d/24/871d241e31d0b4f7efc139487aee94ed.jpg',
          caption:'Image Gallery',
          bg:'#ced4da'
        },
        {
          head:'Propmt',
          images:'https://i.pinimg.com/1200x/08/a8/30/08a83030978a7dfdc6af786c5f836f7f.jpg',
          caption:'ChatGpt Prompt Maker',
          bg:'#caf0f8'
        }
    ]

    const gallery1=[
        
        {
          head:'Alphama',
          images:'https://i.pinimg.com/736x/87/1d/24/871d241e31d0b4f7efc139487aee94ed.jpg',
          caption:'Image Gallery',
          bg:'#ced4da'
        },
        {
          head:'Ui Explorer',
          images:'https://i.pinimg.com/736x/78/b5/9b/78b59bf0c1e0dc5496fb643d9d58a59b.jpg ',
          caption:'Web Design Ui',
          bg:'#ca6702'
        },
        {
          head:'Cillian Murphy',
          images:'https://i.pinimg.com/736x/7d/de/a7/7ddea7a80afa3006601d98548ff445f4.jpg',
          caption:'Italian Style',
          bg:'#640d14'
        },
        {
          head:'Propmt',
          images:'https://i.pinimg.com/1200x/08/a8/30/08a83030978a7dfdc6af786c5f836f7f.jpg',
          caption:'ChatGpt Prompt Maker',
          bg:'#caf0f8'
        },
        {
          head:'Wander',
          images:'https://i.pinimg.com/1200x/4d/c0/e4/4dc0e4d8f14a41e3bb4718a0d5b9f094.jpg',
          caption:'travels web ui',
          bg:'#8ecae6'
        },
        {
          head:'Alphama',
          images:'https://i.pinimg.com/736x/87/1d/24/871d241e31d0b4f7efc139487aee94ed.jpg',
          caption:'Image Gallery',
          bg:'#ced4da'
        }
      
    ]
  return (
    <div  className=''>
      <Gallery  gallery={gallery} />
      <Gallery  gallery={gallery1} />
      <Gallery  gallery={gallery} />
    </div>
  )
}

export default App