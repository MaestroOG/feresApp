import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { FeresContext } from '../../context/FeresContext'
import { useSelector } from 'react-redux'

const PaymentMethods = ({ img, text, isCard, isDiscount, onClick }) => {
    // const { paymentMethod, discount } = useContext(FeresContext)
    const paymentMethod = useSelector((state) => state.modelToggle.paymentMethod)

    useEffect(() => {
        console.log(paymentMethod);
        // console.log(discount);

    }, [])
    return (
        <>
            <div className='px-3 mt-7 flex items-center justify-between pb-5' onClick={onClick}>
                <div className='flex items-center gap-2'>
                    <img src={img} alt="" />
                    <p className='font-medium text-[#2F2F3F#2F2F3F]'>{text}</p>
                </div>
                <div className='flex items-center gap-2'>
                    {isCard && <>
                        {paymentMethod === 'master' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.mastercard} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>Master</p>
                        </>}

                        {paymentMethod === 'visa' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.visa_sticker} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>Visa</p>
                        </>}

                        {paymentMethod === 'cash' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.cash_sticker} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>Cash</p>
                        </>}

                        {paymentMethod === 'ebirr' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.ebirr_sticker} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>E-birr</p>
                        </>}

                        {paymentMethod === 'kaafi' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.kaafi} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>Kaafi</p>
                        </>}
                    </>}
                    {isDiscount && <>
                        <div className='bg-[#0AB247] rounded-full px-[10px] py-[5px] flex items-center justify-between'>
                            <p className='text-white font-medium text-xs'>Discounts 30%</p>
                            <img src={assets.cancel_icon} alt="" className='w-2 invert' />
                        </div>
                    </>}
                    <img src={assets.arrow_right} alt="" />
                </div>
            </div>
            <hr className='mt-1' />
        </>
    )
}

export default PaymentMethods