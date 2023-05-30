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
    <div className='w-full bg-white shadow-lg'>
        <div className='w-full flex flex-row justify-end'>
            <CloseButton />
        </div>
        <div className='p-4 md:p-10 w-full'>
            <div className='w-full md:w-3/4 mb-6 md:mb-10'>
                <CheckoutHeader />
            </div>
            <div className='w-full flex flex-col-reverse md:flex-row gap-16 justify-between'>
            
              <div className='w-2/3'>
                <CheckoutForm cardData={cardData} setCardData={setCardData} />
              </div>
              <div className='w-1/3 flex flex-row justify-end'>
                <CheckoutDetails cardData={cardData} />
              </div>
            
            </div>
        </div>

        
    </div>
  )
}

export default Checkout