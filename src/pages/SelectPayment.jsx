import React, { useState } from 'react'
import PaymentNav from '../components/SelectPaymentComps/PaymentNav'
import PaymentOptions from '../components/SelectPaymentComps/PaymentOptions'
import AddCardBtn from '../components/SelectPaymentComps/AddCardBtn'
import AddCardPopup from '../components/SelectPaymentComps/AddCardPopup'
import PaymentApplyBtn from '../components/SelectPaymentComps/PaymentApplyBtn'
import { useNavigate } from 'react-router-dom'

const SelectPayment = () => {
    const [addCard, setAddCard] = useState(false)
    const navigate = useNavigate();
    return (
        <div className='px-4'>
            <PaymentNav />
            <PaymentOptions />
            <AddCardBtn onClick={() => navigate('/selectpayment/addcard/addnewcard')} />
            {addCard ? <AddCardPopup onCancelClick={() => setAddCard(false)} /> : null}
            <PaymentApplyBtn />
        </div>
    )
}

export default SelectPayment