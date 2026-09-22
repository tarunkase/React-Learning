import React from 'react'
import NestedComponent from './assets/NestedComponent';

export default function NewComponent() {
  return (
    <>
    <div className="card">
    <h1>NewComponent</h1>
    <h2>This is New Component file created separately</h2>
    <img src='../assets/hero.png'></img>
    </div>
    <NestedComponent />
    </>
    
  )
}
