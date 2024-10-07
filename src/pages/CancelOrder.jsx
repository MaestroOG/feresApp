import React, { useContext } from 'react'
import CancelOrderNav from '../components/CancelOrderComps/CancelOrderNav'
import CancelOrderForm from '../components/CancelOrderComps/CancelOrderForm'
import { CancelOrderSubmitBtn } from '../components/CancelOrderComps/CancelOrderSubmitBtn'
import { FeresContext } from '../context/FeresContext'
import OtherReasonPop from '../components/CancelOrderComps/OtherReasonPop'

const CancelOrder = () => {
    const { cancelReason } = useContext(FeresContext)

    return (
        <div>
            <CancelOrderNav />
            <h3 className='text-[#2F2F3F] text-lg px-4 mt-6'>Please select the reason for cancellation:</h3>
            <hr className='my-5 w-[93%] mx-auto' />
            <CancelOrderForm />
            {cancelReason ? <OtherReasonPop /> : null}
            <CancelOrderSubmitBtn />
        </div>
    )
}

export default CancelOrder