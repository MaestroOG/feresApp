import React, { useState } from 'react'
import PaymentNav from './PaymentNav'
import CardOptions from './CardOptions'
import DeleteCardBtn from './DeleteCardBtn'
import DeleteCardPopup from './DeleteCardPopup'

const DeleteCard = () => {
    const [deleteCard, setDeleteCard] = useState(false)
    return (
        <div className='px-4'>
            <PaymentNav />
            <CardOptions />
            <DeleteCardBtn onClick={() => setDeleteCard(true)} />
            {deleteCard ? <DeleteCardPopup onCancelClick={() => setDeleteCard(false)} /> : null}

        </div>
    )
}

export default DeleteCard