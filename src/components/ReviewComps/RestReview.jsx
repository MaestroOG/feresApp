import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const RestReview = ({ id }) => {

    const [reviewAverage, setReviewAverage] = useState(null)
    const [reviewData, setReviewData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getReviewAverage = async () => {
        const options = {
            store_id: id
        }

        try {
            const response = await fetch(import.meta.env.VITE_API_URI + '/api/get_store_review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(options)
            })

            const result = await response.json();

            if (result.success === false) {
                setError(true)
            } else {
                setReviewData(result)
                const reviews = result.review_list;
                const totalRating = reviews.reduce((sum, review) => sum + review.user_rating_to_store, 0);
                const averageRating = totalRating / reviews.length;
                setReviewAverage(averageRating)
            }

            setLoading(false)
        } catch (error) {
            setError(true)
            console.error(error)
        }
    }

    useEffect(() => {
        getReviewAverage();
    })
    return (
        <div className='px-1 mt-11'>
            <h2 className='text-[#2F2F3F] font-bold text-2xl'>KFC Eastlight</h2>

            {/* Left */}
            <div className='flex items-center'>

                {loading && <div>Loading...</div>}
                {error && <div>User reviews not available</div>}
                {reviewAverage && <div className='flex w-[36%] mx-4 flex-col items-start justify-center mt-6'>
                    <h1 className='text-3xl text-[#2F2F3F] font-bold text-center m-auto'>{reviewAverage}</h1>
                    <div className='flex items-center justify-center m-auto gap-3 mt-1'>
                        {Array(reviewAverage).fill().map((_, index) => (
                            <img src={assets.star} alt="" key={index} />
                        ))}
                    </div>
                    <p className='text-[#2F2F3F] text-base text-center m-auto mt-2'>({reviewData?.review_list.length} reviews)</p>
                </div>}

                <hr className='rotate-90 w-[30%]' />

                {/* Right */}
                <div className='mr-8 mt-4'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>5</p>
                        <img src={assets.five_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>4</p>
                        <img src={assets.four_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>3</p>
                        <img src={assets.three_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>2</p>
                        <img src={assets.two_star} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[14px]'>1</p>
                        <img src={assets.one_star} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestReview