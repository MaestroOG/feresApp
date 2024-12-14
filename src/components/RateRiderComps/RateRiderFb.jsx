import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux'

const RateRiderFb = ({ rating, setRating, hover, setHover, ratingText, setRatingText }) => {


    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
console.log(selectedResturant.store.name,"dfsfsd");


    return (
        <div className='mt-5'>
            <h1 className='text-[#2F2F3F] font-medium text-[32px] text-center'>Let’s rate your rider’s delivery service</h1>
            <p className='text-[#767578] text-center text-base font-normal mt-3 w-[70%] mx-auto'>How was the delivery of your order from {selectedResturant?.store?.name} </p>
            <div className='h-[135px] bg-[#F8F8F8] rounded-[13px] mt-4 focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all ease-linear'>
                <input type="text" placeholder='Write your feedback here' className='placeholder:text-[#767578] bg-transparent w-full rounded-[13px] py-[14px] px-4 border-none outline-none' onChange={(e) => setRatingText(e.target.value)} />
            </div>
            <div className='flex items-center justify-center gap-5 mt-6'>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button type='button' key={index} className={index <= rating ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">
                                <img src={index <= rating ? assets.star_2 : assets.star_hollow} alt="" />
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default RateRiderFb