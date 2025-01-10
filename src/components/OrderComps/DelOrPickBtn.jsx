import React, { useContext, useState } from 'react'
import { FeresContext } from '../../context/FeresContext';

const DelOrPickBtn = () => {
    const [delOrP, setDelOrP] = useState(0);
    const { setDeliveryPick } = useContext(FeresContext)
    return (
        <div className='bg-white mb-[10px] pb-[22px]'>
            <div className='w-[90%] mx-auto bg-gray-100 flex items-center rounded-full'>
                <div className={`${delOrP === 0 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all`} onClick={() => {
                    setDeliveryPick(false)
                    setDelOrP(0)
                }}>Delivery</div>
                <div className={`${delOrP === 1 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all`} onClick={() => {
                    setDeliveryPick(true)
                    setDelOrP(1)
                }}>Pickup</div>
            </div>
        </div>
    )
}

export default DelOrPickBtn