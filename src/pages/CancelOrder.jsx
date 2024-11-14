import React, { useContext, useState } from 'react'
import CancelOrderNav from '../components/CancelOrderComps/CancelOrderNav'
import CancelOrderForm from '../components/CancelOrderComps/CancelOrderForm'
import { CancelOrderSubmitBtn } from '../components/CancelOrderComps/CancelOrderSubmitBtn'
import { FeresContext } from '../context/FeresContext'
import OtherReasonPop from '../components/CancelOrderComps/OtherReasonPop'
import SuccessPopup from '../components/SuccessPopup'
import { assets } from '../assets/assets'
import { usePost } from '../servies/usePost'
import { useSelector } from 'react-redux'


const CancelOrder = () => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const { cancelReason } = useContext(FeresContext)
    const { post, error } = usePost()
    const [successPop, setSuccessPop] = useState(false)

    const cancelOrder = async () => {
        const reponse = await post('/api/user/user_reject_order', {
            user_id: userDetail.user_id,
            order_id: userDetail.order_id,
            server_token: userDetail?.token,
            order_reject_reason_comment: "test",
            emurabaha_cancel_request: false,
            cancel_reason: "cancelReason dont want to cahncel"
        })


    }

    return (
        <div>
            <CancelOrderNav />
            <h3 className='text-[#2F2F3F] text-lg px-4 mt-6'>Please select the reason for cancellation:</h3>
            <hr className='my-5 w-[93%] mx-auto' />
            <CancelOrderForm />
            {cancelReason ? <OtherReasonPop /> : null}
            {successPop ? <SuccessPopup image={assets.success_img_3} title={"We’re so sad about your cancellation"} desc={"We will continue to improve our service & satisfy you on the next order."} /> : null}
            <CancelOrderSubmitBtn onClick={() => {
                cancelOrder()
                setSuccessPop(true)
            }} />
        </div>
    )
}

export default CancelOrder