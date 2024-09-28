import React from 'react'
import { assets } from '../../assets/assets'
import TipRiderBtn from './TipRiderBtn'

const TipRider = () => {
    const tipBtnTexts = ["ETB 50", "ETB 80", "Others"]
    return (
        <div className='px-4 mt-5 pb-5'>
            {/* Top */}
            <div className='flex items-center gap-2'>
                <div className='bg-[#F2FDF8] rounded-full p-3'>
                    <img src={assets.gift} alt="" />
                </div>
                <div>
                    <div className='flex items-center gap-2 mb-[2px]'>
                        <h3 className='font-medium text-[#2F2F3F] text-base'>Tip your rider in appreciation</h3>
                        <img src={assets.information_circle} alt="" />
                    </div>
                    <p className='text-[#767578] text-sm'>Riders retain 100% of your tips.</p>
                </div>
            </div>
            <div className='mt-6 flex items-center gap-2'>
                <TipRiderBtn className={"text-white bg-[#0AB247]"} text={"No tips"} />
                <TipRiderBtn className={"text-[#2F2F3F] bg-[#F8F8F8]"} text={tipBtnTexts[0]} />
                <TipRiderBtn className={"text-[#2F2F3F] bg-[#F8F8F8]"} text={tipBtnTexts[1]} />
                <TipRiderBtn className={"text-[#2F2F3F] bg-[#F8F8F8]"} text={tipBtnTexts[2]} />
            </div>
        </div>
    )
}

export default TipRider