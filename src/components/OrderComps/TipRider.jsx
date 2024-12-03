import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import TipRiderBtn from './TipRiderBtn'
import { FeresContext } from '../../context/FeresContext'

const TipRider = ({ tips_list }) => {
    const { tipBtn, setTipBtn, setTipRidePop } = useContext(FeresContext)
    return (
        <div className='px-4 mt-5 pb-5'>
            {/* Top */}
            <div className='flex items-center gap-2'>
                <div className='bg-[#F2FDF8] rounded-full p-3'>
                    <img src={assets.gift} alt="" />
                </div>
                <div onClick={() => setTipRidePop(true)}>
                    <div className='flex items-center gap-2 mb-[2px]'>
                        <h3 className='font-medium text-[#2F2F3F] text-base'>Tip your rider in appreciation</h3>
                        <img src={assets.information_circle} alt="" />
                    </div>
                    <p className='text-[#767578] text-sm'>Riders retain 100% of your tips.</p>
                </div>
            </div>
            <div className='mt-6 flex items-center gap-2'>
                <TipRiderBtn className={`${tipBtn == 'no' ? 'text-white bg-[#0AB247]' : 'text-[#2F2F3F] bg-[#F8F8F8]'}`} text={"No tips"} onClick={() => setTipBtn('no')} />
                {tips_list?.map((item) => <TipRiderBtn className={`${tipBtn == item?.tip_payment_value ? 'text-white bg-[#0AB247]' : 'text-[#2F2F3F] bg-[#F8F8F8]'}`} text={`ETB ${item?.tip_payment_value}`} onClick={() => setTipBtn(item?.tip_payment_value)} />)}
                <TipRiderBtn className={`${tipBtn == 'other' ? 'text-white bg-[#0AB247]' : 'text-[#2F2F3F] bg-[#F8F8F8]'}`} text={'Others'} onClick={() => setTipBtn('other')} />
            </div>
        </div>
    )
}

export default TipRider