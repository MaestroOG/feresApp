import React, { useContext, useState } from 'react'
import CancelOrderNav from '../components/CancelOrderComps/CancelOrderNav'
import CancelOrderForm from '../components/CancelOrderComps/CancelOrderForm'
import { CancelOrderSubmitBtn } from '../components/CancelOrderComps/CancelOrderSubmitBtn'
import { FeresContext } from '../context/FeresContext'
import OtherReasonPop from '../components/CancelOrderComps/OtherReasonPop'
import SuccessPopup from '../components/SuccessPopup'
import { assets } from '../assets/assets'
import { usePost } from '../servies/usePost'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/slices/userAuthSlice'
import { v4 as uuidv4 } from "uuid";



const CancelOrder = () => {
    const userDetail = useSelector((state) => state.userAuth.user)
    const navigate = useNavigate()
    const { cancelReason } = useContext(FeresContext)
    const { post } = usePost()
    const [isLoading, setIsLoading] = useState(false);
    const [successPop, setSuccessPop] = useState(false)
    const dispatch = useDispatch()

    const cancelOrder = async () => {
        setIsLoading(true);
        try {
            await post('/api/user/user_reject_order', {
                user_id: userDetail.user_id,
                order_id: userDetail.order_id,
                server_token: userDetail?.token,
                order_reject_reason_comment: 'test',
                emurabaha_cancel_request: false,
                cancel_reason: 'cancelReason dont want to cahncel',
            });
            setSuccessPop(true);
            dispatch(
                loginUser({
                    ...userDetail,
                    cart_unique_token: uuidv4(),
                })
            );
            const updUserData = {
                ...userDetail,
                cart_unique_token: uuidv4(),
            }
            localStorage.setItem("userData", JSON.stringify(updUserData))
            navigate('/');
        } catch (error) {
            console.error('Error cancelling order:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <CancelOrderNav />
            <h3 className='text-[#2F2F3F] text-lg px-4 mt-6'>Please select the reason for cancellation:</h3>
            <hr className='my-5 w-[93%] mx-auto' />
            <CancelOrderForm />
            {cancelReason ? <OtherReasonPop /> : null}
            {successPop ? <SuccessPopup image={assets.success_img_3} title={"We’re so sad about your cancellation"} desc={"We will continue to improve our service & satisfy you on the next order."} /> : null}
            <CancelOrderSubmitBtn
                onClick={cancelOrder}
                isLoading={isLoading}
            />
        </div>
    )
}

export default CancelOrder