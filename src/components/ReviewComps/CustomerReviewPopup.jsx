import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FeresContext } from '../../context/FeresContext';

const CustomerReviewPopup = () => {

    const { setCustomerReview } = useContext(FeresContext)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const navigate = useNavigate();

    return (
        <div className='h-[94vh] w-full bg-white fixed bottom-0 left-0 rounded-xl px-3'>
            {/* Top Bar */}
            <div className='flex items-center justify-between px-3 pt-6 pb-4'>
                <button onClick={() => setCustomerReview(false)} className='text-lg text-[#1E1E1E]'>Cancel</button>
                <h3 className='text-lg text-[#1E1E1E] font-bold'>Review</h3>
                <button onClick={() => setCustomerReview(false)} className='text-lg text-[#0AB247] font-bold'>Done</button>
            </div>

            <hr />

            <div className='mt-4 flex flex-col h-full items-center py-6 rounded-lg my-24'>
                <div className='flex items-center gap-2'>
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
                <textarea name="" id="" placeholder='Write your review here' className='placeholder:text-[#C4C4C4] placeholder:text-base mt-5 w-full px-6 h-full'></textarea>
            </div>

        </div>
    )
}

export default CustomerReviewPopup