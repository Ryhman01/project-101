import React from 'react'

const Footer = () => {
  return (
    <footer className='border text-center text-sm text-neutral-600 h-14 flex justify-center items-center gap-1'>
        Copyright &copy;{new Date().getFullYear()} {' '}
        <span className='text-blue-900 font-bold'>WIT Internship</span>
    </footer>
  )
}

export default Footer