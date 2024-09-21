import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Address from '../components/Address';
import Overview from '../components/Overview';
import RestReview from '../components/RestReview';
import CustomerReview from '../components/CustomerReview';
import CustomerReviewCard from '../components/CustomerReviewCard';
import CustomerReviewTextArea from '../components/CustomerReviewTextArea';
import SuccessPopup from '../components/SuccessPopup';
import CustomerReviewPopup from '../components/CustomerReviewPopup';
import { FeresContext } from '../context/FeresContext';

const Reviews = () => {


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
            {/* <SuccessPopup /> */}
            {
                customerReview ? <CustomerReviewPopup /> : null
            }

            {/* Submit Review Button */}

            <div className='bg-white px-2 py-4 fixed bottom-0 left-0 w-full'>
                <button className='bg-[#0AB247] text-white flex items-center gap-2 w-full justify-center rounded-3xl p-4'>
                    Submit a Review
                </button>
            </div>
        </div>
    )
}

export default Reviews