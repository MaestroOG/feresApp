import React from 'react'
import AddCardNav from './AddCardNav'
import PaymentCards from './PaymentCards'
import AddNewBtn from './AddNewBtn'
import SelectCountryPopup from './SelectCountryPopup'
import { useNavigate } from 'react-router-dom'

const AddCard = () => {
    const navigate = useNavigate()
    return (
        <div className='px-4'>
            <AddCardNav />
            <PaymentCards />
            <AddNewBtn onClick={() => navigate('/selectpayment/addcard/addnewcard')} />
        </div>
    )
}

export default AddCard