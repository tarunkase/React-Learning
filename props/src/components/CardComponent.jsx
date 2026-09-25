import React from 'react'
import ButtonComponent from './ButtonComponent'
// import css from 'index.css'

function CardComponent(props) {

  return (
    <>
    <div className="cardParent">
      <div className="card">
          <img src={props.img}></img>
          <h1>{props.userName } {props.age}</h1>
          <div>A React Developer with hands-on experience of HTML, CSS, JS, Bootstarp and React.JS</div>
          <ButtonComponent />
          
      </div> 
    </div>
    </>
  )
}

export default CardComponent
