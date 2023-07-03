import React from 'react'

const Header = ({userScore}) => {
  return (
    <div className='mt-12 flex justify-between border-2 border-header rounded-lg uppercase py-2 px-3 w-4/5 max-w-screen-md'>

      <div className='text-white flex flex-col justify-center p-1 leading-none tracking-wide text-xl font-bolder md:text-3xl'>
        <span className=''>rock</span>
        <span className='-my-1 md:-my-2'>paper</span>
        <span className=''>scissors</span>
      </div>

      <div className='flex flex-col justify-center items-center bg-white rounded-md py-2 px-5 md:px-8'>
        <span className='text-sm tracking tracking-wide opacity-75'>score</span>
        <span className='text-4xl leading-none opacity-75 md:text-5xl'>{userScore}</span>
      </div>
    </div>
  )
}

export default Header