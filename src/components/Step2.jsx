import React, { useEffect, useState } from 'react'
import Rock from './Rock'
import Paper from './Paper'
import Scissors from './Scissors'

const Step2 = ({playerSelection, computerSelection,setComputerSelection}) => {

  const [winner, setWinner] = useState('')

  useEffect(() => {
    const generateComputerSelection = setTimeout(() => {

      const selections = ['rock', 'paper', 'scissors']
      const randomIndex = Math.floor(Math.random() * selections.length)
      const selection = selections[randomIndex]
      setComputerSelection(selection)
    }, 3000)

    return () => {
      clearTimeout(generateComputerSelection)
    }
  }, [])

  useEffect(() => {
    if (playerSelection && computerSelection) {
      const determineWinner = () => {
        if (playerSelection === computerSelection) {
          return "It's a tie!";
        } else if (
          (playerSelection === 'rock' && computerSelection === 'scissors') ||
          (playerSelection === 'paper' && computerSelection === 'rock') ||
          (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
          return 'You win';
        } else {
          return 'You lose';
        }
      };
      setWinner(determineWinner());
    }
  }, [playerSelection, computerSelection])
  
  return (
    <div className='flex justify-between items-center w-4/5 sm:w-2/3 sm:gap-2'>

      <div className='flex flex-col items-center md:h-[300px] w-1/2 sm:text-xl '>
        <div>
        {playerSelection === 'rock' && <Rock />}
        {playerSelection === 'paper' && <Paper />}
        {playerSelection === 'scissors' && <Scissors />}
        </div>
        
        <h1 className='uppercase text-gray-300 tracking-widest my-6 md:-order-1'>you picked</h1>
      </div>

      {playerSelection && computerSelection && (
        <div>
          <h1 className='uppercase text-gray-300 tracking-widest'>{winner}</h1>
        </div>
      )}

      <div className='flex flex-col items-center md:h-[300px] w-1/2 sm:text-xl'>
        
        {computerSelection ? (
          <div className='bg-blue-900/20 h-32 w-32  rounded-full sm:h-36 sm:w-36 md:h-44 md:w-44'>
          {computerSelection === 'rock' && <Rock />}
          {computerSelection === 'paper' && <Paper />}
          {computerSelection === 'scissors' && <Scissors />}
          </div>
        ) : (
          <div className='bg-blue-900/20 h-32 w-32  rounded-full sm:h-36 sm:w-36 md:h-44 md:w-44'>
          </div>
        )
        }
        <h1 className='uppercase text-gray-300 tracking-widest my-6 md:-order-1'>the house picked</h1>
        
      </div>
    </div>
  )
}

export default Step2