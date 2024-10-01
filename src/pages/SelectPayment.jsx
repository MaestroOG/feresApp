import React, { useState } from 'react'
import PaymentNav from '../components/SelectPaymentComps/PaymentNav'
import PaymentOptions from '../components/SelectPaymentComps/PaymentOptions'
import AddCardBtn from '../components/SelectPaymentComps/AddCardBtn'
import AddCardPopup from '../components/SelectPaymentComps/AddCardPopup'
import PaymentApplyBtn from '../components/SelectPaymentComps/PaymentApplyBtn'

const SelectPayment = () => {
    const [addCard, setAddCard] = useState(false)
    return (
        <div className='px-4'>
            <PaymentNav />
            <PaymentOptions />
            <AddCardBtn onClick={() => setAddCard(true)} />
            {addCard ? <AddCardPopup onCancelClick={() => setAddCard(false)} /> : null}
            <PaymentApplyBtn />
        </div>
    )
}

export default SelectPayment