import React from 'react'
import PaymentNav from '../components/SelectPaymentComps/PaymentNav'
import { assets } from '../assets/assets'
import AddCardBtn from '../components/SelectPaymentComps/AddCardBtn'
import { useNavigate } from 'react-router-dom'

const PaymentMethods = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='px-4'>
                <PaymentNav onDelClick={() => navigate('/selectpayment/deletecard')} />
            </div>
            <div className='px-4 mt-10'>
                <h3 className='font-medium text-lg text-[#2F2F3F] mb-5'>Credit & debit card</h3>
                <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.mastercard} alt="" />
                        <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                    </div>
                    <input type="radio" name="card" value={"master"} />
                </div>
                <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.visa} alt="" />
                        <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                    </div>
                    <input type="radio" name="card" value={"visa"} />
                </div>
                <AddCardBtn onClick={() => navigate('/selectpayment/addcard')} />
            </div>
            <div className='px-4 mt-10'>
                <h3 className='font-medium text-lg text-[#2F2F3F] mb-5'>More payment Options</h3>
                <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.cash_sticker} alt="" />
                        <p className='text-[#2F2F3F] text-lg'>Cash</p>
                    </div>
                    <input type="radio" name="card" value={"cash"} />
                </div>
                <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.ebirr_sticker} alt="" />
                        <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                    </div>
                    <input type="radio" name="card" value={"ebirr"} />
                </div>
                <div className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.kaafi} alt="" />
                        <p className='text-[#2F2F3F] text-lg'>Kaafi micro finance</p>
                    </div>
                    <input type="radio" name="card" value={"kaafi"} />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods