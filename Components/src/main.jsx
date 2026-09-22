import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewComponent from './newComponent.jsx'


function Car(){
  return (
    <h2>The fabuloes car</h2>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewComponent></NewComponent>
    <Car />
    <App />
  </StrictMode>,
)
