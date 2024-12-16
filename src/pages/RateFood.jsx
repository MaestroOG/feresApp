import React, { useState } from 'react'
import RateFoodNav from '../components/RateFoodComps/RateFoodNav'
import RateFoodCard from '../components/RateFoodComps/RateFoodCard'
import RateFoodFb from '../components/RateFoodComps/RateFoodFb'
import RateFoodSubmitBtn from '../components/RateFoodComps/RateFoodSubmitBtn'
import SuccessPopup from '../components/SuccessPopup'
import { assets } from '../assets/assets'
import { useSelector,useDispatch } from 'react-redux'
import { usePost } from '../servies/usePost'
import { loginUser } from '../redux/slices/userAuthSlice'
import { v4 as uuidv4 } from "uuid";
import { setCartDetails, setCartItemData } from '../redux/slices/cartDetail'



const RateFood = () => {
    const dispatch = useDispatch()
    const [successPop, setSuccessPop] = useState(false)
    const [ratingText, setRatingText] = useState('');
    const { post, error } = usePost()
    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);
    const userData = useSelector((state) => state.userAuth.user)

    console.log(selectedResturant.store._id, 'here is a changes');

    const storeRating = () => {
        const response = post('/api/user/rating_to_store', {

            user_id: userData?.user_id,
            store_id: selectedResturant.store._id,
            server_token: userData?.token,
            user_rating_to_store: 3,
            user_review_to_store: ratingText
        })

        dispatch(loginUser({
            ...userData,
            cart_unique_token: uuidv4(),
        }))
        dispatch(setCartDetails(null))
        dispatch(setCartItemData(null))


    }
    return (
        <div className='px-4'>
            <RateFoodNav />
            <h2 className='text-[#2F2F3F] text-2xl font-bold text-center mt-8'>Rate your order</h2>
            <RateFoodCard />
            <RateFoodFb ratingText={ratingText} setRatingText={setRatingText} />
            <RateFoodSubmitBtn onClick={() => {
                storeRating()
                setSuccessPop(true)
            }} />
            {successPop ? <SuccessPopup extraFunc={true} image={assets.success_img} title={"Thanks for your review"} desc={"Your review has been submitted. We’ll check your review and email you with a status update."} /> : null}
        </div>
    )
}

export default RateFood