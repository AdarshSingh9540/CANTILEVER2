
import './App.css'
// import {Btn} from './components/Button'
import Header from './components/Header'
import TechCrunch from './components/TechCrunch'
import  Body  from './components/Body'
import { MovingNews } from './components/MovingNews'
import { WallStreet } from './components/WallStreet'
import { AppleNews } from './components/AppleNews'
function App() {
  

  return (
    <div className='bg-black min-h-screen'>
     <Header/>
     {/* <Btn/> */}
     <Body/>
     <TechCrunch/>
     <MovingNews/>
     <WallStreet/>
     <AppleNews />
    </div>
  )
}

export default App
