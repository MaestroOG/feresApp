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
                    
                    <label htmlFor='cash' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.wavy_money_bill} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>Cash</p>
                        </div>
                        <input type="radio" id='cash' name="payment" onChange={handlePaymentChange} value={"cash"} checked={deliveryPayment === "cash"} />
                    </label>
                    <label htmlFor='ebirr' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.E_birr} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                        </div>
                        <input type="radio" id='ebirr' name="payment" onChange={handlePaymentChange} value={"ebirr"} checked={deliveryPayment === "ebirr"} />
                    </label>
                    
                </Container>

                <Container className={'py-5 fixed bottom-0 left-0 w-full bg-white'} onClick={() => navigate('/deliveryservice/deliverydetails')}>
                    <button className='p-4 w-full text-white text-lg font-medium rounded-full bg-[#0AB247]'>Apply</button>
                </Container>
            </div>
        </>
    )
}

export default DeliverySelectPayment