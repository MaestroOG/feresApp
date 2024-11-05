import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const RecommendedRests = () => {
    const navigate = useNavigate();
    const [recommendedRests, setRecommendedRests] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchRecRests = async () => {
        const options = {
            country: "Ethiopia",
            city: "Addis Ababa",
            latitude: 9.0192,
            longitude: 38.7525,
            type: 1,
            user_id: "621fc0e0c2545594abfd644e",
            cuisines: null,
            delivery_time: false,
            expected_delivery_time: null,
            custom_rate: false,
            user_rate: null
        }

        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/api/food/get_recommended_stores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(options)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setRecommendedRests(data)
            setIsLoading(false)
            console.log(recommendedRests);


        } catch (error) {
            setError(true)
            setIsLoading(false)
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        fetchRecRests();
    }, [])

    return (
        <div className='w-full px-2 mt-7'>
            <h2 className='text-[#2F2F3F] text-lg font-medium px-2'>Recommended restaurant</h2>

            {recommendedRests && recommendedRests.success === false || error && <div className='text-center my-5'>Error Fetching Stores</div>}
            {isLoading && <div>Loading...</div>}
            <div className='flex items-center gap-3 overflow-auto no-scrollbar'>
                <div className="flex items-center gap-4">
                    {recommendedRests && recommendedRests.success && recommendedRests?.stores.map((store) => (
                        store.stores.map((store, index) => (
                            <div key={index} className='mt-6 w-max' onClick={() => navigate(`/restaurant/${store._id}`)}>
                                {/* Top */}
                                <img src={store.image_url} alt="" className='w-[309px] h-[140px] rounded-tr-2xl rounded-tl-2xl object-cover' />
                                {/* Bottom */}
                                <div className='mt-3'>
                                    <div className='flex items-center justify-between gap-2'>
                                        <h2 className='font-bold text-base'>{store.name}</h2>
                                        <div className='flex items-center gap-1 justify-center'>
                                            <img className='mb-1' src={assets.star} alt="" />
                                            <h2 className='text-base'>{store.user_rate}</h2>
                                        </div>
                                    </div>
                                    <p className='text-xs text-[#979797]'>{store.Description}</p>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
                <div className="flex items-center gap-4">

                </div>
            </div>
        </div>
    )
}

export default RecommendedRests




// {recommendedRests && recommendedRests.stores.map((store) => (
//     store.stores.map((store, index) => (
//         <div key={index} className='mt-6 w-max' onClick={() => navigate(`/restaurant/${store._id}`)}>
//             {/* Top */}
//             <img src={store.image_url} alt="" className='w-[365px] h-[140.98px] rounded-tr-2xl rounded-tl-2xl object-cover' />
//             {/* Bottom */}
//             <div className='mt-3'>
//                 <div className='flex items-center justify-between gap-2'>
//                     <h2 className='font-bold text-base'>{store.name}</h2>
//                     <div className='flex items-center gap-1 justify-center'>
//                         <img className='mb-1' src={assets.star} alt="" />
//                         <h2 className='text-base'>{store.user_rate}</h2>
//                     </div>
//                 </div>
//                 <p className='text-xs text-[#979797]'>{store.Description}</p>
//             </div>
//         </div>
//     ))
// ))}