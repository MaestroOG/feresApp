import React, { useState } from 'react'
import RateRiderNav from '../components/RateRiderComps/RateRiderNav'
import RiderCard from '../components/RateRiderComps/RiderCard'
import RateRiderFb from '../components/RateRiderComps/RateRiderFb'
import { ContinueBlockBtn } from '../components/RateRiderComps/ContinueBlockBtn'
import { useSelector } from 'react-redux'
import { usePost } from '../servies/usePost'

const RateRider = () => {
    const providerInfo = useSelector((state) => state.cartDetails.providerInfo)
    const { post, error } = usePost()
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [ratingText, setRatingText] = useState('');

    const driverRating = () => {
        const response = post('/api/user/rating_to_provider', {
            order_id: "64893e6b8ba72957067e5ef1",
            user_id: "627a49f33734ead95be89950",
            provider_id: "6220e9902a4f11b34835b2f0",
            server_token: "taVcQbF0r7pl0OnaN7PH0Ul2jCZ5MVe2",
            user_rating_to_provider: 3,
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