import React from 'react'
import { assets } from '../../assets/assets'

const FeaturedRestsCard = ({ onClick, img, title, desc, userRate, userRateQuantity, price, delivery }) => {
    return (
        <div className='border border-[#F4F4F4] py-3 pb-3 mt-5 flex gap-2 rounded-xl mr-5 pr-3 min-w-[302px] h-[98px]' onClick={onClick}>
            {/* Card Left */}
            <div className='px-2'>
                <img src={img} alt="" className='w-[85px] h-[84px] object-cover rounded-xl' width={'85px'} height={'84px'} />
            </div>
            {/* Card Right */}
            <div>
                <h3 className='text-[14px] font-medium'>{title}</h3>
                {desc && <p className='text-[10px] text-[#979797]'>{desc}</p>}
                <div className='flex items-center gap-1 mt-1'>
                    <img src={assets.star} alt="" />
                    <div>
                        <p className='text-[10px]'>{userRate || 0} <span className='text-[#979797]'>({userRateQuantity || 0})</span></p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    {delivery && <div className='flex items-center mt-[6px] gap-1 text-[#2F2F3FCC]'>
                        <img src={assets.clock_img} alt="" />
                        <p className='text-[11px]'>Within {delivery} mins</p>
                    </div>}
                    {price && <div className='flex items-center mt-[6px] gap-1 text-[#2F2F3FCC]'>
                        <img src={assets.scooter_img} alt="" />
                        <p className='text-[11px]'>EBT {price}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default FeaturedRestsCard