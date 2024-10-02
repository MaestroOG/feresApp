import React, { useState } from 'react'
import PaymentNav from '../components/SelectPaymentComps/PaymentNav'
import PaymentOptions from '../components/SelectPaymentComps/PaymentOptions'
import AddCardBtn from '../components/SelectPaymentComps/AddCardBtn'
import AddCardPopup from '../components/SelectPaymentComps/AddCardPopup'
import PaymentApplyBtn from '../components/SelectPaymentComps/PaymentApplyBtn'
import { useNavigate } from 'react-router-dom'
import DeleteCardPopup from '../components/SelectPaymentComps/DeleteCardPopup'

const SelectPayment = () => {
    const [deleteCard, setDeleteCard] = useState(false)
    const [addCard, setAddCard] = useState(false)
    const navigate = useNavigate();
    return (
        <div className='px-4'>
            <PaymentNav onDelClick={() => setDeleteCard(true)} />
            <PaymentOptions />
            <AddCardBtn onClick={() => navigate('/selectpayment/addcard/addnewcard')} />
            {addCard ? <AddCardPopup onCancelClick={() => setAddCard(false)} /> : null}
            {deleteCard ? <DeleteCardPopup onCancelClick={() => setDeleteCard(false)} /> : null}
            <PaymentApplyBtn />
        </div>
    )
}

export default SelectPayment