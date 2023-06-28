import React from 'react'

const Rock = ({playerSelection,setPlayerSelection}) => {
  
  return (
    <div className={`${playerSelection === null ? 'absolute bottom-0 right-1/2 translate-x-1/2 transform translate-y-1/2' : 'md:h-52 md:w-52'}
    cursor-pointer
    bg-gradient-to-b from-rockPrimary to-rockSecondary rounded-full h-32 w-32 flex items-center justify-center sm:h-36 sm:w-36 md:h-44 md:w-44`}
      onClick={() => setPlayerSelection('rock')}
      style={{
        boxShadow: '1px 3px 0px 2px rgba(235, 9, 39, 0.418)'
      }}
      >
        <div className='bg-gray-200 w-4/5 h-4/5 rounded-full flex items-center justify-center hover:bg-white' 
        style={{
          boxShadow: '-1px -1px 0px 2px rgba(98, 98, 98, 0.378)'
        }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/></svg>
        </div>
    </div>
  )
}

export default Rock