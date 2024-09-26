import React, { useState } from 'react'

const DelOrPickBtn = () => {
    const [delOrP, setDelOrP] = useState(0);
    return (
        <div className='w-[90%] mx-auto py-1 mt-3 bg-gray-100 flex items-center rounded-full'>
            <div className={`${delOrP === 0 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all ease-linear`} onClick={() => setDelOrP(0)}>Delivery</div>
            <div className={`${delOrP === 1 ? 'bg-white text-[#0AB247] shadow-md' : 'text-[#979797]'} w-1/2 text-center py-4 rounded-full font-bold text-sm transition-all ease-linear`} onClick={() => setDelOrP(1)}>Pickup</div>
        </div>
    )
}

export default DelOrPickBtn