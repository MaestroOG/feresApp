import React from 'react'
import { assets } from '../assets/assets'
import CustomerReviewSortBtn from './CustomerReviewSortBtn'

const CustomerReview = () => {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-xl text-[#2F2F3F]'>Customer Reviews</h2>
            <div className='mt-5 flex items-center gap-3 overflow-scroll mb-4'>
                <CustomerReviewSortBtn image={assets.arrow_left_right} text={"Sort"} />
                <CustomerReviewSortBtn image={assets.star_green} text={"5"} />
                <CustomerReviewSortBtn image={assets.star_green} text={"4"} />
                <CustomerReviewSortBtn image={assets.star_green} text={"3"} />
                <CustomerReviewSortBtn image={assets.star_green} text={"2"} />
            </div>
        </div>
    )
}

export default CustomerReview