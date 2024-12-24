import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';

const Offers = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    const [promotionData, setPromotionData] = useState(null);
    const navigate = useNavigate();
    const loginUser = useSelector(state => state.userAuth.user)

    const getData = async () => {
        const body = {
            "user_id": loginUser?.user_id
        }
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/get_all_promotions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setPromotionData(data);
            setIsLoading(false);
            // console.log(promotionData);

        } catch (error) {
            setError(true)
            setIsLoading(false)
            console.error('Fetch error: ', error);
        }

    }

    useEffect(() => {
        getData();
        console.log(promotionData);
    }, [])

    if (error || promotionData && promotionData.success === false) {
        return (
            <div className='text-center'>Error Fetching Stores</div>
        )
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='px-1 mt-10'>
            {/* Top line */}

            <div className='flex items-center justify-between mb-6 px-3'>
                <h3 className='text-[#2F2F3F] text-lg font-medium'>Special offers</h3>
                <p className='text-base font-medium text-[#979797]'>See all</p>
            </div>
            <div className='flex items-center gap-2 overflow-x-auto offers mb-8 w-screen'>
                {/* Card */}
                {/* Card Top */}
                {promotionData && promotionData.success && <>
                    <div className='relative flex items-center gap-[10px] flex-shrink-0'>
                        {/* <img src={assets.offer_bg} alt="" /> */}
                        {promotionData && promotionData?.promotions_list?.map(item => (
                            item?.store_info?.map(store => (
                                <div key={store?._id}>
                                    <img src={store?.image_url} alt="" className='w-[365px] h-[140.98px] rounded-tr-3xl rounded-tl-3xl object-cover' onClick={() => navigate(`/restaurant/${store?._id}`)} />
                                    {/* Card Top Stickers */}
                                    <div className='bg-[#F2FDF8] w-[154px] h-[34px] rounded-[30px] p-[10px] text-[#0AB247] font-medium text-xs text-center absolute top-2 left-2 whitespace-nowrap'>{item?.discount_percent}% off selected items</div>

                                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-28'>
                                        <img src={assets.clock_01} alt="" className='w-5' />
                                        <p className='text-xs font-medium text-[#1E1E1E] whitespace-nowrap'>{store?.delivery_time || 'N/A'} mins</p>

                                    </div>
                                    <div className='flex items-center gap-2 bg-white w-[91px] h-[40px] p-[10px] rounded-[30px] absolute bottom-14 right-3'>
                                        <img src={assets.scooter_02} alt="" className='w-5' />
                                        <p className='text-xs font-medium text-[#1E1E1E] whitespace-nowrap'>{store?.wallet_currency_code} {store?.wallet}</p>

                                    </div>
                                    {/* Card Info */}
                                    <div className='px-2'>
                                        <div className='flex items-center justify-between mt-2'>
                                            <h2 className='text-base font-bold text-[#2F2F3F]'>{store?.name}</h2>
                                            <div className='flex items-center gap-2'>
                                                <img src={assets.star} alt="" className='w-[18px]' />
                                                <p className='text-[#1E1E1E] text-sm whitespace-nowrap'>{store?.user_rate}</p>
                                            </div>
                                        </div>
                                        <p className='text-xs text-[#979797] mt-1'>{store?.Description}</p>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Offers