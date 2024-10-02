import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Address from '../components/ReviewComps/Address';
import Overview from '../components/ReviewComps/Overview';
import RestReview from '../components/ReviewComps/RestReview';
import CustomerReview from '../components/ReviewComps/CustomerReview';
import CustomerReviewCard from '../components/ReviewComps/CustomerReviewCard';
import CustomerReviewTextArea from '../components/ReviewComps/CustomerReviewTextArea';
import SuccessPopup from '../components/SuccessPopup';
import CustomerReviewPopup from '../components/ReviewComps/CustomerReviewPopup';
import { FeresContext } from '../context/FeresContext';

const Reviews = () => {

    const [reviewSuccess, setReviewSuccess] = useState(false)
    const { customerReview, setCustomerReview } = useContext(FeresContext)
    const navigate = useNavigate();

    return (
        <div className='px-4 pt-6'>
            {/* Top Bar */}
            <div className='flex items-center gap-20'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h2 className='font-bold text-2xl text-center'>Rating & reviews</h2>
            </div>

            <RestReview />

            <Overview />

            <Address />

            <CustomerReview />

            <CustomerReviewCard customerPfp={assets.customer_pfp} />

            <CustomerReviewTextArea />
            {reviewSuccess ? <SuccessPopup image={assets.success_img} title={"Thanks for your review"} desc={"Your review has been submitted. We’ll check your review and email you with a status update."} /> : null}

            {
                customerReview ? <CustomerReviewPopup /> : null
            }

            {/* Submit Review Button */}

            <div className='bg-white px-2 py-4 fixed bottom-0 left-0 w-full'>
                <button className='bg-[#0AB247] text-white flex items-center gap-2 w-full justify-center rounded-3xl p-4' onClick={() => setReviewSuccess(true)}>
                    Submit a Review
                </button>
            </div>
        </div>
    )
}

export default Reviews