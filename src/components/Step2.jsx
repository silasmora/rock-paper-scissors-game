import React, { useEffect, useState } from 'react'
import Rock from './Rock'
import Paper from './Paper'
import Scissors from './Scissors'

const Step2 = ({playerSelection, setPlayerSelection, computerSelection, setComputerSelection, setUserScore}) => {

  const [winner, setWinner] = useState('')

  useEffect(() => {
    const generateComputerSelection = setTimeout(() => {

      const selections = ['rock', 'paper', 'scissors']
      const randomIndex = Math.floor(Math.random() * selections.length)
      const selection = selections[randomIndex]
      setComputerSelection(selection)
    }, 2000)

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
      }
      const winner = determineWinner()
      setWinner(winner);
      updateScore(winner)
    }
  }, [playerSelection, computerSelection])

  const updateScore = (result) => {
    if (result === 'You win') {
      setUserScore(prevState => prevState + 1)
    } 
  }
  
  const playAgain = () => {
    setPlayerSelection(null)
    setComputerSelection(null)
  }
  
  return (
    <>
      <div className='flex justify-center items-center w-[90%] max-w-screen-lg '>

        <div className='flex flex-col items-center sm:text-xl md:h-[300px] w-1/2 md:w-2/6'>
            
          <div className='relative'>
          {playerSelection === 'rock' && <Rock />}
          {playerSelection === 'paper' && <Paper />}
          {playerSelection === 'scissors' && <Scissors />}
          {winner === 'You win' ? (
            <div className='rounded-full absolute top-0 left-0 right-0 bottom-0 shadow-faintWhite'></div>
          ) : null}
          </div>
            
          <h1 className='uppercase text-gray-300 tracking-widest my-6 md:-order-1'>you picked</h1>
        </div>

        {playerSelection && computerSelection && (
        <div className='hidden md:flex flex-col items-center gap-4'>
          <h1 className='uppercase text-gray-100 tracking-widest text-4xl font-bolder '>{winner}</h1>
          <button onClick={playAgain} className='uppercase tracking-widest text-lg bg-gray-100 py-2 px-8 rounded-lg hover:bg-white'>play again</button>
        </div>
        )}

        <div className='flex flex-col items-center sm:text-xl md:h-[300px] w-1/2 md:w-2/6'>
          
          {computerSelection ? (
            <div className='relative'>
            {computerSelection === 'rock' && <Rock />}
            {computerSelection === 'paper' && <Paper />}
            {computerSelection === 'scissors' && <Scissors />}
            {winner === 'You lose' ? (
              <div className='rounded-full absolute top-0 left-0 right-0 bottom-0 shadow-faintWhite'></div>
            ) : null}
            </div>
          ) : (
            <div className='bg-blue-900/20 h-32 w-32  rounded-full sm:h-36 sm:w-36 md:h-44 md:w-44 md:mt-4'>
            </div>
          )
          }
          <h1 className='uppercase text-gray-300 tracking-widest my-6 md:-order-1'>the house picked</h1>
          
        </div>
      </div>
      {playerSelection && computerSelection && (
        <div className='flex flex-col items-center gap-4 md:hidden'>
          <h1 className='uppercase text-gray-100 tracking-widest text-4xl font-bolder'>{winner}</h1>
          <button onClick={playAgain} className='uppercase tracking-widest text-lg bg-gray-100 py-2 px-8 rounded-lg hover:bg-white'>play again</button>
        </div>
      )}
    </>
  )
}

export default Step2