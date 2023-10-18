
import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Home from './components/Home'

function App() {

  const [isGameStarted,setIsGameStarted]= useState(false)

  const toggleGamePlay = ()=>{
    setIsGameStarted(prev => !prev)
  }


  return (
    <>
    {
      isGameStarted?<Game />:<Home toggle={toggleGamePlay} />
    }
     
     

    </>
  )
}

export default App
