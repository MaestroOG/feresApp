import React from 'react'
import { assets } from '../../assets/assets'

const CustomerReviewCard = ({ review }) => {
    return (
        <div className='mt-9'>
            {/* Card Top */}
            <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-3'>
                    {review && <img src={review.image_url} alt="" />}
                    <div>
                        <h4 className='text-base text-[#2F2F3F] font-medium'>{review?.username} {review?.user_last_name}</h4>
                        <p className='text-[#767578] text-sm'>{review?.created_at.slice(0, 10)}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    {Array(review?.user_rating_to_store.toString()).fill().map((_, index) => (
                        <img src={assets.star} alt="" key={index} />
                    ))}
                </div>
            </div>

            {/* Card Text */}
            {review?.user_review_to_store && <div>
                <p className='text-base text-[#2F2F3F]'>Lorem ipsum dolor sit amet consectetur. Amet placerat nulla ornare a vulputate aliquam. Eget eget in augue vulputate nec nunc.</p>
            </div>}

            {/* Card Bottom */}

            <div className='flex items-center mt-4 gap-2'>
                <img src={assets.thumbs_up} alt="" />
                <p className='text-[#2F2F3F] text-sm'>Helpful</p>
            </div>
        </div>
    )
}

export default CustomerReviewCard