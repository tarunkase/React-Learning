import React from 'react'
import NestedComponent from './assets/NestedComponent';

export default function NewComponent() {
  return (
    <>
    <div>NewComponent</div>
    <img src='../assets/hero.png'></img>
    <NestedComponent />
    </>
    
  )
}
