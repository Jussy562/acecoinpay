import React, { useState, useEffect, useRef  } from 'react'
import { MdModeEdit, MdVerified } from 'react-icons/md'
import { CgMenuGridO } from 'react-icons/cg'
import ButtonPrimary from '../button/ButtonPrimary'
import mastercard from '../../assets/icons/mastercard.png'

function CheckoutForm({cardData, setCardData}) {
    const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
    const [isCardNumberFocused, setIsCardNumberFocused] = useState(false);
    const [isCVVFocused, setIsCVVFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const cardNumberRef = useRef(null);

    // collect input value and store them in cardData state
    const handleFormChange = (event) => {
        const { id, value } = event.target;
    
        if (id === 'month' || id === 'year') {
          setCardData((prevCardData) => ({
            ...prevCardData,
            expiry: {
                ...prevCardData.expiry,
                [id]: value,
            },
          }));
        }else if (id === 'cardNumber') {
            const formattedValue = value
            .replace(/[^\d]/g, '') 
            .slice(0, 19) 
            .replace(/(.{4})/g, '$1-') 
            .replace(/^-|-$/g, '') 
            .trim();

            setCardData((prevCardData) => ({
              ...prevCardData,
              [id]: formattedValue,
            }));
          } else {
          setCardData((prevCardData) => ({
            ...prevCardData,
            [id]: value,
          }));
        }
        console.log(cardData);
      };

      useEffect(() => {
        // Check if the card number is complete
        const isComplete = cardData.cardNumber.length === 19;
        setIsCardNumberComplete(isComplete);
      }, [cardData.cardNumber]);

      const handleEditCardNumber = () => {
        cardNumberRef.current.focus();

      };

      const handleCardNumberFocus = (e) => {
        setIsCardNumberFocused(true);
      };
    
      const handleCardNumberBlur = (e) => {
        setIsCardNumberFocused(false);
      };

      const handleCVVFocus = (e) => {
        setIsCVVFocused(true);
      };
    
      const handleCVVBlur = (e) => {
        setIsCVVFocused(false);
      };

      const handlePasswordFocus = (e) => {
        setIsPasswordFocused(true);
      };
    
      const handlePasswordBlur = (e) => {
        setIsPasswordFocused(false);
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        
        console.log(cardData);
      };
  return (
    <>
        
        <form className='w-full flex flex-col justify-between gap-6 h-auto'
        onSubmit={handleFormSubmit}
        >
            <div className="mb-6 flex flex-col">
                <div className='flex flex-row justify-between items-center'>
                <label htmlFor="cardNumber" className="flex flex-col  text-start mb-2 text-sm font-medium text-black dark:text-white">
                    <span className='font-bold'>Card Number</span>
                    <span className='text-xs text-gray-400'>Enter the 16-digit card number on the card</span>
                </label>
                <p className='flex flex-row text-blue-500 items-center font-bold cursor-pointer'
                onClick={handleEditCardNumber}
                >
                    <MdModeEdit />
                    Edit
                </p>
                </div>
                <div className={`w-full flex flex-row justify-between items-center  border  text-gray-900 text-lg px-4 py-1.5  rounded-lg  ${isCardNumberFocused ? 'bg-blue-100 ring-blue-500 border-blue-500 dark:ring-blue-500 dark:border-blue-500 border-2 ' : 'border-gray-300 bg-gray-50 '} dark:bg-gray-50  dark:placeholder-gray-400 dark:text-white `}>
                    <div className='flex flex-row items-center gap-4 w-full'>
                        <img src={mastercard} alt='mastercard' className='w-8 h-6' />
                        <input type="text" id="cardNumber" 
                        ref={cardNumberRef}
                        maxLength={19} 
                        className="bg-gray-50 focus:outline-none border-none text-gray-900 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-100 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="645 - 2345 - 9876 - 2322" 
                        value={cardData.cardNumber}
                        onChange={handleFormChange}
                        onFocus={handleCardNumberFocus}
                        onBlur={handleCardNumberBlur}
                        required />
                    </div>
                    {isCardNumberComplete && (
                        <div className="text-blue-500 text-xl font-bold">
                            <MdVerified />
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-6 flex flex-col md:flex-row md:justify-between">
                
                <label htmlFor="cvv" className="flex flex-col  text-start mb-2 text-sm font-medium text-black dark:text-white w-full md:w-1/2">
                    <span className='font-bold'>CVV Number</span>
                    <span className='text-xs text-gray-400'>Enter the 3 or 4 digit number on the card</span>
                </label>
                
            
                <div className={`w-full md:w-1/2 flex flex-row justify-between items-center px-4 py-1.5 border   text-gray-900 text-lg rounded-lg   ${isCVVFocused ? 'bg-blue-100 ring-blue-500 border-blue-500 dark:ring-blue-500 dark:border-blue-500 border-2 ' : 'border-gray-300 bg-gray-50 '} dark:bg-gray-50  dark:placeholder-gray-400 dark:text-white`}>
                    <input type="text" id="cvv" maxLength={3}  
                    pattern='[0-9]*' 
                    className=" h-full w-full text-center rounded-l-lg border-none focus:outline-none bg-gray-50 focus:bg-blue-100 text-sm font-bold"
                    name='cvv'
                    value={cardData.cvv}
                    onChange={handleFormChange}
                    onFocus={handleCVVFocus}
                    onBlur={handleCVVBlur}
                    placeholder='234' required />
                    <div className='p-2'>
                        <CgMenuGridO className='text-xl'/>
                    </div>
                </div>
            </div>

            <div className="mb-6 flex flex-col md:flex-row justify-between w-full">
                
                <label htmlFor="expiry" className="flex flex-col w-full md:w-1/2  text-start mb-2 text-sm font-medium text-black dark:text-white">
                    <span className='font-bold'>Expiry Date</span>
                    <span className='text-xs text-gray-400'>Enter the expiration date of the card</span>
                </label>
               <div className='flex flex-row items-center gap-3 w-full md:w-1/2'>
                <input type="text" id="month"
                maxLength={2}
                className="bg-gray-50 text-center border border-gray-300 text-black font-bold text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500 focus:bg-blue-100 block w-full p-2.5 dark:bg-gray-50  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                value={cardData.expiry?.month || ''}
                placeholder='01'
                onChange={handleFormChange}
                required />
                <span className='text-black'>/</span>
                <input type="text" id="year"
                maxLength={2}
                className="bg-gray-50 text-center border border-gray-300 text-black font-bold text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500 focus:bg-blue-100  block w-full p-2.5 dark:bg-gray-50 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={cardData.expiry?.year || ''}
                onChange={handleFormChange} 
                placeholder='22' 
                required />
               </div>
            
                
            </div>
            <div className="mb-6 flex flex-col md:flex-row w-full">
                
                <label htmlFor="password" className="flex flex-col w-full md:w-1/2 text-start mb-2 text-sm font-medium text-black dark:text-white">
                    <span className='font-bold'>Password</span>
                    <span className='text-xs text-gray-400'>Enter your dynamic password</span>
                </label>
                
            
                <div className={`flex flex-row justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg ${isPasswordFocused ? 'bg-blue-100 ring-blue-500 border-blue-500 dark:ring-blue-500 dark:border-blue-500 border-2 ' : 'border-gray-300 bg-gray-50 '} w-full md:w-1/2 dark:bg-gray-50  dark:placeholder-gray-400  `}>
                    <input type="password" 
                    id="password" 
                    name='password'
                    className="bg-gray-50  border-none text-gray-900 text-xl rounded-l-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-100 focus:outline-none w-full p-2.5 dark:bg-gray-50  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={cardData.passowrd}
                    onChange={handleFormChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    placeholder='********' 
                    required />
                    <div className='p-2'>
                        <CgMenuGridO className='text-xl'/>
                    </div>
                </div>
            </div>
           
            
            <ButtonPrimary name='Pay Now' />
        </form>

    </>
  )
}

export default CheckoutForm