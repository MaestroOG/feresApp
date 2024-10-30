import React, { useContext, useState } from 'react'
import Container from '../../components/Container'
import PaymentNav from '../../components/SelectPaymentComps/PaymentNav'
import { assets } from '../../assets/assets'
import AddCardBtn from '../../components/SelectPaymentComps/AddCardBtn'
import SuccessPopup from '../../components/SuccessPopup'
import ReviewPayPopup from './ReviewPayPopup'
import { FeresContext } from '../../context/FeresContext'

const DeliveryTipRiderPayment = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Container>
                <PaymentNav />
                <div className='mt-20'>
                    <label htmlFor='master' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.mastercard} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                        </div>
                        <input type="radio" id='master' name="payment" value={"master"} c />
                    </label>
                    <label htmlFor='visa' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.visa} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                        </div>
                        <input type="radio" id='visa' name="payment" value={"visa"} />
                    </label>
                    <label htmlFor='cash' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.wavy_money_bill} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>Cash</p>
                        </div>
                        <input type="radio" id='cash' name="payment" value={"cash"} />
                    </label>
                    <label htmlFor='ebirr' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4' onClick={() => setReviewPay(true)}>
                        <div className='flex items-center gap-2'>
                            <img src={assets.E_birr} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                        </div>
                        <input type="radio" id='ebirr' name="payment" value={"ebirr"} />
                    </label>
                    <label htmlFor='kaafi' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.kaafi} alt="" />
                            <p className='text-[#2F2F3F] text-lg'>Kaafi micro finance</p>
                        </div>
                        <input type="radio" id='kaafi' name="payment" value={"kaafi"} />
                    </label>
                </div>
                <AddCardBtn />


                <Container className={'py-5 w-full fixed bottom-0 left-0 bg-white'} onClick={() => setVisible(true)}>
                    <button className='w-full rounded-full p-4 text-white text-lg font-medium bg-[#0AB247]'>Pay Tip</button>
                </Container>

                {visible && <SuccessPopup image={assets.success_img} title={"Congratulations!"} desc={"You have successfully tipped the rider for ETB 10.00"} />}
            </Container>

            <ReviewPayPopup />
        </>
    )
}

export default DeliveryTipRiderPayment