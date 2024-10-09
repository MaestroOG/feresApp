import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const GroceryStore = () => {

    const [groceryStore, setGroceryStore] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const fetchGroceryStores = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/api/e-commerce/get_ecommerce_stores_list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setGroceryStore(data);
            setIsLoading(false);
            console.log(groceryStore);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        fetchGroceryStores();
    }, [])
    return (
        <>
            <h2 className='text-[#2F2F3F] text-lg font-medium px-4 mt-6'>Grocery stores</h2>
            {isLoading ? <div className='text-center'>Loading...</div> : groceryStore && groceryStore.stores.slice(0, 2).map((store, index) => (
                <div className='px-4 mt-6 relative' key={index}>

                    <div className='w-full mt-8 mb-5 relative' onClick={() => navigate('/restaurant')}>
                        <img src={store.image_url} alt="" className='w-[400px] h-[154.5px] object-contain' />

                        <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-2 right-32'>
                            <img src={assets.clock_img} alt="" />
                            <p className='text-sm'>{store.delivery_time} mins</p>
                        </div>
                        <div className='bg-white text-black flex items-center gap-2 p-3 rounded-3xl absolute bottom-2 right-6'>
                            <img src={assets.scooter_img} alt="" />
                            <p className='text-sm'>EBT 150</p>
                        </div>
                    </div>
                    <div className='mb-8'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='font-bold text-base'>{store.name}</h2>
                            <div className='flex items-center gap-1 justify-center mr-6'>
                                <img className='mb-1' src={assets.star} alt="" />
                                <h2 className='text-base'>{store.user_rate}</h2>
                            </div>
                        </div>
                        <p className='text-xs text-[#979797]'>{store.Description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default GroceryStore