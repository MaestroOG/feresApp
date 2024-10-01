import React from 'react'
import AddCardNav from './AddCardNav'
import PaymentCards from './PaymentCards'
import AddNewBtn from './AddNewBtn'
import SelectCountryPopup from './SelectCountryPopup'

const AddCard = () => {
    return (
        <div className='px-4'>
            <AddCardNav />
            <PaymentCards />
            <AddNewBtn />
        </div>
    )
}

export default AddCard