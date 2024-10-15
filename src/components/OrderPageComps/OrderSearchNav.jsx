import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const OrderSearchNav = () => {
    const [value, setValue] = useState("")
    return (
        <div className='flex items-center gap-2 px-4 py-5'>
            <img src={assets.arrow_left} alt="" className='invert' />
            <div className='flex items-center justify-between bg-[#F8F8F8] w-full rounded-[30px] p-[20px] py-[18px] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all'>
                <div className='flex items-center gap-2'>
                    <img src={assets.search} alt="" />
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='border-none outline-none bg-[#F8F8F8] placeholder:text-[#767578] focus:bg-white' placeholder='Search for restaurants' />
                </div>
                {value.length > 0 && <img src={assets.close} alt="" onClick={() => setValue("")} />}
            </div>
        </div>
    )
}

export default OrderSearchNav