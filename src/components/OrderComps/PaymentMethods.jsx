import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux'

const PaymentMethods = ({ img, text, isCard, isDiscount, onClick, className }) => {
    // const { paymentMethod, discount } = useContext(FeresContext)
    const paymentMethod = useSelector((state) => state.modelToggle.paymentMethod)

    useEffect(() => {
        console.log(paymentMethod);
        // console.log(discount);

    }, [])
    return (
        <>
            <div className={`px-3 pt-7 flex items-center justify-between pb-6 bg-white ${className}`} onClick={onClick}>
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

                        {paymentMethod === 'emurabaha' && <>
                            <img className='w-[32px] h-[24px] rounded-lg' src={assets.murabaha_sticker} alt="" />
                            <p className='font-medium text-sm text-[#2F2F3F]'>E-Murabaha</p>
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
            <hr />
        </>
    )
}

export default PaymentMethods