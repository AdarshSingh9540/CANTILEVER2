
import './App.css'
// import {Btn} from './components/Button'
import Header from './components/Header'
// import TechCrunch from './components/TechCrunch'
import  Body  from './components/Body'
import { MovingNews } from './components/MovingNews'
import { WallStreet } from './components/WallStreet'
import { AppleNews } from './components/AppleNews'
import Footer from './components/Footer'
function App() {
  

  return (
    <div className='bg-black min-h-screen'>
     <Header/>
     {/* <Btn/> */}
     <Body/>
     {/* <TechCrunch/> */}
     <WallStreet/>
     <MovingNews/>
     <AppleNews />
     <Footer/>
    </div>
  )
}

export default App
