
import './App.css'
// import {Btn} from './components/Button'
import Header from './components/Header'
import TechCrunch from './components/TechCrunch'
import  Body  from './components/Body'
import { MovingNews } from './components/MovingNews'
function App() {
  

  return (
    <div className='bg-black min-h-screen'>
     <Header/>
     {/* <Btn/> */}
     <Body/>
     <TechCrunch/>
     <MovingNews/>
    </div>
  )
}

export default App
