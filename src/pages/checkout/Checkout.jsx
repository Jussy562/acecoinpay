import React, {useState} from 'react'
import CloseButton from '../../components/button/CloseButton'
import CheckoutHeader from '../../components/header/CheckoutHeader'
import CheckoutForm from '../../components/forms/CheckoutForm'
import CheckoutDetails from '../../components/details/CheckoutDetails'

function Checkout() {

  // store card details
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cvv: '',
    expiry: {
      month: '',
      year: '',
    },
    password: '',
  });



  





  return (
    <div className='w-full bg-white dark:bg-gray-600 shadow-xl'>
        <div className='w-full flex flex-row justify-end'>
            <CloseButton />
        </div>
        <div className='p-4 md:p-10 w-full mt-4 md:mt0'>
            <div className='w-full md:w-3/4 mb-6 md:mb-10'>
                <CheckoutHeader />
            </div>
            <div className='w-full flex flex-col-reverse md:flex-row gap-16 justify-between'>
            
              <div className='w-ful md:w-2/3'>
                <CheckoutForm cardData={cardData} setCardData={setCardData} />
              </div>
              <div className='w-full md:w-1/3 flex flex-row justify-end'>
                <CheckoutDetails cardData={cardData} />
              </div>
            
            </div>
        </div>

        
    </div>
  )
}

export default Checkout