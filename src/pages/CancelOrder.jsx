import React, { useContext, useState } from 'react'
import CancelOrderNav from '../components/CancelOrderComps/CancelOrderNav'
import CancelOrderForm from '../components/CancelOrderComps/CancelOrderForm'
import { CancelOrderSubmitBtn } from '../components/CancelOrderComps/CancelOrderSubmitBtn'
import { FeresContext } from '../context/FeresContext'
import OtherReasonPop from '../components/CancelOrderComps/OtherReasonPop'
import SuccessPopup from '../components/SuccessPopup'
import { assets } from '../assets/assets'

const CancelOrder = () => {
    const { cancelReason } = useContext(FeresContext)
    const [successPop, setSuccessPop] = useState(false)

    return (
        <div>
            <CancelOrderNav />
            <h3 className='text-[#2F2F3F] text-lg px-4 mt-6'>Please select the reason for cancellation:</h3>
            <hr className='my-5 w-[93%] mx-auto' />
            <CancelOrderForm />
            {cancelReason ? <OtherReasonPop /> : null}
            {successPop ? <SuccessPopup image={assets.success_img_3} title={"We’re so sad about your cancellation"} desc={"We will continue to improve our service & satisfy you on the next order."} /> : null}
            <CancelOrderSubmitBtn onClick={() => setSuccessPop(true)} />
        </div>
    )
}

export default CancelOrder