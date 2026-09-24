import React from 'react'
import ButtonComponent from './ButtonComponent'
// import css from 'index.css'

function CardComponent(props) {

  return (
    <>
    <div className="cardParent">
      <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1787742235469-86fc784b8981?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1>{props.userName}</h1>
          <div>A React Developer with hands-on experience of HTML, CSS, JS, Bootstarp and React.JS</div>
          <ButtonComponent />
          
      </div> 
    </div>
    </>
  )
}

export default CardComponent
