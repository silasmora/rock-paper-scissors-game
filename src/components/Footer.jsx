import React from 'react'

const Footer = ({isModal, setIsModal}) => {

  return (
    <div className='mb-12 md:-mt-24 md:p-8 md:self-end'>
      
        <button onClick={() => setIsModal(!isModal)} className='uppercase text-gray-300 tracking-widest border border-gray-300 rounded-lg py-2 px-6'>rules</button>
        
    </div>
  )
}

export default Footer