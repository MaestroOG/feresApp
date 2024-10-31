import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import PaymentNav from '../../components/SelectPaymentComps/PaymentNav'
import { FeresContext } from '../../context/FeresContext'
import Container from '../../components/Container'
import ReviewPayPopup from './ReviewPayPopup'
import { useNavigate } from 'react-router-dom'

const DeliverySelectPayment = () => {

    const navigate = useNavigate()
    const { handlePaymentChange, deliveryPayment } = useContext(FeresContext)
    const [reviewPay, setReviewPay] = useState(false)

    useEffect(() => {
        console.log(deliveryPayment)
    }, [deliveryPayment])
    return (
        <>
            <div>
                <Container>
                    <PaymentNav />
                </Container>
                <Container className='mt-20'>
                    <label htmlFor='master' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.mastercard} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                        </div>
                        <input type="radio" id='master' name="payment" onChange={handlePaymentChange} value={"master"} checked={deliveryPayment === 'master'} />
                    </label>
                    <label htmlFor='visa' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.visa} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                        </div>
                        <input type="radio" id='visa' name="payment" onChange={handlePaymentChange} value={"visa"} checked={deliveryPayment === 'visa'} />
                    </label>
                    <label htmlFor='cash' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.wavy_money_bill} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>Cash</p>
                        </div>
                        <input type="radio" id='cash' name="payment" onChange={handlePaymentChange} value={"cash"} checked={deliveryPayment === "cash"} />
                    </label>
                    <label onClick={() => setReviewPay(true)} htmlFor='ebirr' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.E_birr} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                        </div>
                        <input type="radio" id='ebirr' name="payment" onChange={handlePaymentChange} value={"ebirr"} checked={deliveryPayment === "ebirr"} />
                    </label>
                    <label htmlFor='kaafi' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.kaafi} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>Kaafi micro finance</p>
                        </div>
                        <input type="radio" id='kaafi' name="payment" onChange={handlePaymentChange} value={"kaafi"} checked={deliveryPayment === "kaafi"} />
                    </label>
                </Container>

                <Container className={'py-5 fixed bottom-0 left-0 w-full bg-white'} onClick={() => navigate('/deliveryservice/deliverydetails')}>
                    <button className='p-4 w-full text-white text-lg font-medium rounded-full bg-[#0AB247]'>Apply</button>
                </Container>
            </div>

            {reviewPay && <ReviewPayPopup onPayClick={() => setReviewPay(false)} onCancelClick={() => setReviewPay(false)} onNotNowClick={() => setReviewPay(false)} />}
        </>
    )
}

export default DeliverySelectPayment