import React, { useState } from 'react'
import RateRiderNav from '../components/RateRiderComps/RateRiderNav'
import RiderCard from '../components/RateRiderComps/RiderCard'
import RateRiderFb from '../components/RateRiderComps/RateRiderFb'
import { ContinueBlockBtn } from '../components/RateRiderComps/ContinueBlockBtn'
import { useSelector } from 'react-redux'
import { usePost } from '../servies/usePost'

const RateRider = () => {
    const providerInfo = useSelector((state) => state.cartDetails.providerInfo)
    const userData = useSelector((state) => state.userAuth.user)
    const { post, error } = usePost()
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [ratingText, setRatingText] = useState('');

    const driverRating = () => {
        const response = post('/api/user/rating_to_provider', {
            order_id: userData?.order_id,
            user_id: userData?.user_id,
            provider_id: providerInfo.provider_id,
            server_token: userData?.token,
            user_rating_to_provider: rating,
            user_review_to_provider: ratingText
        })


    }

    return (
        <div className='px-4'>
            <RateRiderNav />
            <h2 className='text-[#2F2F3F] text-2xl font-bold text-center mt-8'>Rate your rider</h2>
            <RiderCard providerInfo={providerInfo} />
            <RateRiderFb providerInfo={providerInfo} rating={rating} setRating={setRating} setHover={setHover} hover={hover} setRatingText={setRatingText} ratingText={ratingText} />
            <ContinueBlockBtn to={'/ratefood'} onClick={driverRating} />
        </div>
    )
}

export default RateRider