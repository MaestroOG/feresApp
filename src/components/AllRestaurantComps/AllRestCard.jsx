import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePost } from '../../servies/usePost';
import Spinner from '../Spinner';
import FoodDeliveryLabel from '../Labels/foodDeliveryLabel';

const AllRestCard = () => {
    const navigate = useNavigate();
    const [allRests, setAllRests] = useState(null);
    const [searchRes, setSearchRes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const searchData = useSelector((state) => state.search.searchData);
    const allPromo = useSelector((state) => state.promotions.allPromo);

    const { post } = usePost();

    const fetchSearchRes = async () => {
        try {
            const data = await post('/api/search_items_and_stores', {
                city: 'Addis Ababa',
                city_id: '6220e8c72a4f11b34835b2ef',
                country: 'Ethiopia',
                latitude: 9.03,
                longitude: 38.74,
                search_value: searchData,
                type: 1,
            });
            setSearchRes(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error.message);
            setError(true);
            setIsLoading(false);
        }
    };

    const fetchAllRests = async () => {
        const options = {
            country: 'Ethiopia',
            city: 'Addis Ababa',
            latitude: 9.03,
            longitude: 38.74,
            type: 1,
            user_id: null,
            cuisines: [],
            delivery_time: false,
            expected_delivery_time: null,
            custom_rate: false,
            user_rate: null,
        };
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URI}/api/food/get_stores_nearest_citytoprate`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: '*/*',
                    },
                    body: JSON.stringify(options),
                }
            );

            if (!res.ok) {
                setError(true);
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setAllRests(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Fetch error: ', error);
            setError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (searchData.length > 0) {
            fetchSearchRes();
        } else {
            fetchAllRests();
        }
    }, [searchData]);

    const checkRes = (storeId) => {
        return allPromo?.some((item) => item?.store_info[0]?._id === storeId);
    };

    const getDiscount = (storeId) => {
        const promo = allPromo?.find((item) => item?.store_info[0]?._id === storeId);
        return promo ? promo.discount_percent : null;
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <div className='my-5 text-center'>Error Fetching Stores</div>;
    }

    return (
        <div className='px-4 mt-6 relative'>
            <h2 className='text-[#2F2F3F] text-lg font-medium'>
                {searchRes && searchData.length > 0 ? 'Search results' : 'All restaurants'}
            </h2>
            {allRests &&
                !searchRes &&
                allRests?.stores.map((store) =>
                    store?.stores.map((store, index) => (
                        <div key={index} className='w-full mt-8 mb-5 relative' onClick={() => navigate(`/restaurant/${store._id}`)}>
                            {checkRes(store?._id) && (
                                <div className='bg-[#F2FDF8] w-[154px] h-[34px] rounded-[30px] p-[10px] text-[#0AB247] font-medium text-xs text-center absolute top-2 left-2 whitespace-nowrap'>{getDiscount(store?._id)}% off selected items</div>
                            )}
                            <img
                                src={store.image_url}
                                alt='Restaurant'
                                className='rounded-tr-2xl rounded-tl-2xl object-cover h-[154px] w-full'
                            />
                            <FoodDeliveryLabel
                                className={'bottom-[2px] relative'}
                                restaurantCordinates={store?.location}
                                delivery_time={store?.delivery_time + store.kitchen_time}
                                wallet_currency_code={'ETB'}
                            />
                            <div className='mb-8 mt-3'>
                                <div className='flex items-center justify-between gap-2'>
                                    <h2 className='font-bold text-base'>{store.name}</h2>
                                    <div className='flex items-center gap-1 justify-center mr-1'>
                                        <img className='mb-1' src={assets.star} alt='Star' />
                                        <h2 className='text-base'>{store.user_rate}</h2>
                                    </div>
                                </div>
                                <p className='text-xs text-[#979797]'>{store.Description}</p>
                            </div>
                        </div>
                    ))
                )}

            {searchRes &&
                searchRes?.stores.map((store) =>
                    store?.stores.map((st) => (
                        <div key={st?._id} className='w-full mt-8 mb-5 relative' onClick={() => navigate(`/restaurant/${st._id}`)}>
                            {checkRes(store?._id) && (
                                <div className='bg-[#F2FDF8] w-[154px] h-[34px] rounded-[30px] p-[10px] text-[#0AB247] font-medium text-xs text-center absolute top-2 left-2 whitespace-nowrap'>{getDiscount(store?._id)}% off selected items</div>
                            )}
                            <img
                                src={st?.image_url}
                                alt='Restaurant'
                                className='rounded-tr-2xl rounded-tl-2xl object-cover h-[154px] w-full'
                            />
                            <div className='whitespace-nowrap bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-11 right-[7.4rem]'>
                                <img src={assets.clock_img} alt='Clock' />
                                <p className='text-sm'>{st?.delivery_time} mins</p>
                            </div>
                            <div className='whitespace-nowrap bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-11 right-2'>
                                <img src={assets.scooter_img} alt='Scooter' />
                                <p className='text-sm'>EBT 150</p>
                            </div>
                            <div className='mb-8'>
                                <div className='flex items-center justify-between gap-2'>
                                    <h2 className='font-bold text-base'>{st?.name}</h2>
                                    <div className='flex items-center gap-1 justify-center mr-1'>
                                        <img className='mb-1' src={assets.star} alt='Star' />
                                        <h2 className='text-base'>{st?.user_rate}</h2>
                                    </div>
                                </div>
                                <p className='text-xs text-[#979797]'>{st?.Description}</p>
                            </div>
                        </div>
                    ))
                )}
        </div>
    );
};

export default AllRestCard;
