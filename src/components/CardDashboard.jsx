import React from 'react'
import { MdPaid } from 'react-icons/md'

const CardDashboard = (props) => {
  return (
    <div className={`p-5 rounded-xl bg-blue-600 my-3`}>
        <div className='w-16 h-16 bg-white rounded-xl flex justify-center items-center'>
            <MdPaid size={40} className="text-blue-600"/>
        </div>
        <h1 className='text-white text-4xl font-semibold mt-3'>Rp.245.000.000</h1>
        <p className='text-white text-lg mt-3'>Total Income</p>
    </div>
  )
}

export default CardDashboard