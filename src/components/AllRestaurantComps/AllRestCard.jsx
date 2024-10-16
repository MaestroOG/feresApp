import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const AllRestCard = () => {
    const navigate = useNavigate();
    const [allRests, setAllRests] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const fetchAllRests = async () => {
        const options = {
            country: "Ethiopia",
            city: "Addis Ababa",
            latitude: 9.03,
            longitude: 38.74,
            type: 1,
            user_id: null,
            cuisines: [],
            delivery_time: false,
            expected_delivery_time: null,
            custom_rate: false,
            user_rate: null
        }
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/api/food/get_stores_nearest_citytoprate', {
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
            setAllRests(data);
            setIsLoading(false);
            console.log(allRests);

        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        fetchAllRests();
    }, [])
    return (
        <div className='px-4 mt-6 relative'>
            <h2 className='text-[#2F2F3F] text-lg font-medium'>All restaurants</h2>

            {isLoading ? <div className='text-center'>Loading...</div> : allRests && allRests.stores.map((store) => (
                store.stores.map((store, index) => (
                    <>
                        <div key={index} className='w-full mt-8 mb-5 relative' onClick={() => navigate(`/restaurant/${store._id}`)}>
                            <img src={store.image_url} alt="" className='rounded-tr-2xl rounded-tl-2xl object-cover h-[154px] w-full' />

                            <div className='whitespace-nowrap bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-2 right-[7.4rem]'>
                                <img src={assets.clock_img} alt="" />
                                <p className='text-sm'>{store.delivery_time} mins</p>
                            </div>
                            <div className='whitespace-nowrap bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-2 right-2'>
                                <img src={assets.scooter_img} alt="" />
                                <p className='text-sm'>EBT 150</p>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div className='flex items-center justify-between gap-2'>
                                <h2 className='font-bold text-base'>{store.name}</h2>
                                <div className='flex items-center gap-1 justify-center mr-1'>
                                    <img className='mb-1' src={assets.star} alt="" />
                                    <h2 className='text-base'>{store.user_rate}</h2>
                                </div>
                            </div>
                            <p className='text-xs text-[#979797]'>{store.Description}</p>
                        </div>
                    </>
                ))
            ))}
        </div>
    )
}

export default AllRestCard