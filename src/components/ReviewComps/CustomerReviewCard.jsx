import React from 'react'
import { assets } from '../../assets/assets'

const CustomerReviewCard = ({ customerPfp }) => {
    return (
        <div className='mt-9'>
            {/* Card Top */}
            <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-3'>
                    <img src={customerPfp} alt="" />
                    <div>
                        <h4 className='text-base text-[#2F2F3F] font-medium'>Ronald Richards</h4>
                        <p className='text-[#767578] text-sm'>22 February 2024</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={assets.star} alt="" />
                    <img src={assets.star} alt="" />
                    <img src={assets.star} alt="" />
                    <img src={assets.star} alt="" />
                    <img src={assets.star} alt="" />
                </div>
            </div>

            {/* Card Text */}
            <div>
                <p className='text-base text-[#2F2F3F]'>Lorem ipsum dolor sit amet consectetur. Amet placerat nulla ornare a vulputate aliquam. Eget eget in augue vulputate nec nunc.</p>
            </div>

            {/* Card Bottom */}

            <div className='flex items-center mt-4 gap-2'>
                <img src={assets.thumbs_up} alt="" />
                <p className='text-[#2F2F3F] text-sm'>Helpful</p>
            </div>
        </div>
    )
}

export default CustomerReviewCard