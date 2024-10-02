import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'

const PaymentOptions = () => {
    const { selectedOption, handleOptionChange, setPaymentMethod } = useContext(FeresContext)
    return (
        <div className='mt-20'>
            <label htmlFor='master' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={assets.mastercard} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2389</p>
                </div>
                <input type="radio" id='master' name="payment" onChange={handleOptionChange} value={"master"} checked={selectedOption === 'master'} />
            </label>
            <label htmlFor='visa' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.visa} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>**** 2305</p>
                </div>
                <input type="radio" id='visa' name="payment" onChange={handleOptionChange} value={"visa"} checked={selectedOption === 'visa'} />
            </label>
            <label htmlFor='cash' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.wavy_money_bill} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>Cash</p>
                </div>
                <input type="radio" id='cash' name="payment" onChange={handleOptionChange} value={"cash"} checked={selectedOption === "cash"} />
            </label>
            <label htmlFor='ebirr' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.E_birr} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>E-birr</p>
                </div>
                <input type="radio" id='ebirr' name="payment" onChange={handleOptionChange} value={"ebirr"} checked={selectedOption === "ebirr"} />
            </label>
            <label htmlFor='kaafi' className='border border-[#EAEAEA] rounded-[16px] px-4 py-4 flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2'>
                    <img src={assets.kaafi} alt="" />
                    <p className='text-[#2F2F3F] text-lg'>Kaafi micro finance</p>
                </div>
                <input type="radio" id='kaafi' name="payment" onChange={handleOptionChange} value={"kaafi"} checked={selectedOption === "kaafi"} />
            </label>
        </div>
    )
}

export default PaymentOptions