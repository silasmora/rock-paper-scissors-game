import Footer from "./components/Footer"
import Header from "./components/Header"
import Step1 from './components/Step1'
import Modal from './components/Modal'
import {useState} from 'react'
import Step2 from "./components/Step2"

function App() {

  const [userScore, setUserScore] = useState(0)
  const [isModal, setIsModal] = useState(false)
  const [playerSelection, setPlayerSelection] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)

  return (
    <div className='flex flex-col items-center h-screen justify-between'>
      <Header userScore={userScore}/>

      {<Step1 
          playerSelection={playerSelection} setPlayerSelection={setPlayerSelection}/>}

      {playerSelection && 
        <Step2 
          playerSelection={playerSelection}
          setPlayerSelection={setPlayerSelection}
          computerSelection={computerSelection}
          setComputerSelection={setComputerSelection}
          setUserScore={setUserScore}
          />}

      <Footer setIsModal={setIsModal} isModal={isModal}/>

      {isModal && (
          <Modal setIsModal={setIsModal} isModal={isModal}/>
        )}
    </div>
  )
}

export default App
