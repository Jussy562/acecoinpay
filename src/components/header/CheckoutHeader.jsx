import React from 'react'
import { HiCreditCard } from 'react-icons/hi'

function CheckoutHeader() {
  return (
    <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row gap-3 items-center md:w-3/4'>
            <div className='p-2 bg-blue-500 rounded-full text-xl text-white'>
                <HiCreditCard />
            </div>
            <h4 className='text-gray-500 text-2xl'><span className='text-black font-bold'>AceCoin</span>Pay</h4>
        </div>

        <div className='flex flex-row w-1/3'>
            <p className='text-black'><span className='bg-black rounded-s text-white px-1.5 py-2'>0</span> <span className='bg-black rounded-s text-white px-1.5 py-2'>1</span> : <span className='bg-black rounded-s text-white px-1.5 py-2'>1</span> <span className='bg-black rounded-s text-white px-1.5 py-2'>9</span></p>
        </div>
    </div>
  )
}

export default CheckoutHeader