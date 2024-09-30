import React, { useContext, useState } from 'react'
import AddCardNav from './AddCardNav'
import CardForm from './CardForm'
import SelectCountryPopup from './SelectCountryPopup'
import { FeresContext } from '../../context/FeresContext'
import SuccessPopup from '../SuccessPopup'
import { assets } from '../../assets/assets'

const AddNewCardForm = () => {
    const { countryPop, setCountryPop, addCardPop, setAddCardPop } = useContext(FeresContext)
    return (
        <div className='px-4'>
            <AddCardNav />
            <CardForm />
            {countryPop ? <SelectCountryPopup onCancelClick={() => setCountryPop(false)} /> : null}
            {addCardPop ? <SuccessPopup image={assets.success_img} title={"Congratulations!"} desc={"You've successfully add your card ****2305 has been added to the payment method"} /> : null}
        </div>
    )
}

export default AddNewCardForm