import React from 'react'
import DashedLine from '../utilities/DashedLine'
import { BiReceipt } from 'react-icons/bi'
import { RiAppleLine } from 'react-icons/ri'
import mastercardnt from '../../assets/icons/mastercardnt.png'
import chip from '../../assets/icons/chip.png'
import contactless from '../../assets/icons/contactless.png'
import './CheckoutDetails.css'

function CheckoutDetails({cardData}) {
    const formatedCardNumber = cardData.cardNumber.replace(/-/g, '').slice(-4);
    const Month = cardData.expiry.month;
    const Year = cardData.expiry.year;

    const isExpiryValid = Month && Year;
    console.log(cardData);
  return (
    <div className='w-full flex flex-row justify-end'>
        <div className=' bg-[#e9eded] rounded-lg  flex flex-col justify-start w-full h-auto'>
        {/* Card details */}
            <div className='px-8 relative left-0 right-0 -top-2 transform -translate-y-20 '>
                <div className=' cardInfo bg-white px-5 py-4 rounded-lg flex flex-col bg-opacity-10 shadow-xl'>
                    <div className='flex flex-row justify-between items-center mb-14'>
                        <div className=''>
                            <img src={chip} alt='chip' className='w-8'/>
                        </div>
                        <div className=''>
                            <img src={contactless} alt='contactless' className='w-8'/>
                        </div>

                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='w-full flex flex-col items-start'>
                            <p className='text-black text-sm p-0 m-0 font-medium'>Jonathan Michael</p>
                            <p className='text-black text-lg font-bold p-0 m-0'>
                                <span className='text-3xl'>....</span> <span>{formatedCardNumber}</span>
                            </p>

                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            
                            <p className='text-sm text-black font-medium'>
                                {isExpiryValid ? `${Month}/${Year}` : 'MM/YYYY'}
                            </p>
                           
                            <div>
                                <img src={mastercardnt} alt='mastercard' className='w-12' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* order details */}
            <div className='relative left-0 right-0 -top-4 transform -translate-y-10 '>
                <div className=' flex flex-col gap-3 px-8   py-2 justify-between items-center'>
                    <div className='flex flex-row justify-between  w-full'>
                        <p className='text-sm text-gray-500'>Company name</p>
                        <p className='text-sm font-bold text-black flex flex-row items-center'>
                            <span className=''><RiAppleLine /></span>
                            Apple
                        </p>
                    </div>
                    <div className='flex flex-row justify-between  w-full'>
                        <p className='text-sm text-gray-500'>Order Number</p>
                        <p className='text-sm font-bold text-black'>1266201</p>
                    </div>
                    <div className='flex flex-row justify-between  w-full'>
                        <p className='text-sm text-gray-500'>Product</p>
                        <p className='text-sm font-bold text-black'>MacBook Air</p>
                    </div>
                    <div className='flex flex-row justify-between  w-full'>
                        <p className='text-sm text-gray-500'>VAT(20%)</p>
                        <p className='text-sm font-bold text-black'>$100.00</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 relative overflow-hidden h-8'>
                    <div className='absolute bg-white h-8 w-8 rounded-full left-0 -top-0 transform -translate-x-1/2'></div>
                    <DashedLine />
                    <div className='absolute bg-white h-8 w-8 rounded-full -right-0 -top-0 transform translate-x-1/2 '></div>
                </div>
                <div className='flex flex-row px-8  py-3 justify-between items-center'>
                    <div className='text-start'>
                        <p className='text-sm text-gray-500'>You have to pay</p>
                        <p className='text-black text-lg font-bold'>549.<span className='text-sm'>99</span> <span className='text-sm font-light'>USD</span></p>
                    </div>
                    <div className='text-3xl text-gray-500'>
                        <BiReceipt />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutDetails