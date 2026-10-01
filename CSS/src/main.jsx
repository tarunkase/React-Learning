import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/navbar/Navbar.jsx'
import  Home  from './component/home/Home.jsx'

createRoot(document.getElementById('root')).render(
   
    <>
     <Navbar />
    <App />
    <Home />
    </>
)
