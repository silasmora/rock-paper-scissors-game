import React from 'react'
import triangle from '/images/bg-triangle.svg'
import Paper from './Paper'
import Scissors from './Scissors'
import Rock from './Rock'

const Step1 = ({playerSelection,setPlayerSelection}) => {

  return (
    <>
      {!playerSelection && (
        <div className='mx-24 relative md:mx-36'>
          <img src={triangle} alt="triangle" />
    
          <Paper 
            playerSelection={playerSelection}
            setPlayerSelection={setPlayerSelection}/>
          <Scissors
            playerSelection={playerSelection} 
            setPlayerSelection={setPlayerSelection}/>
          <Rock
            playerSelection={playerSelection}  
            setPlayerSelection={setPlayerSelection}/>
          
        </div>
      )}
    </>
  )
}

export default Step1