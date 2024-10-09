import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceComps/ServiceCard'
import Explore from '../components/ServiceComps/Explore'
import Offers from '../components/ServiceComps/Offers'
import Menu from '../components/ServiceComps/Menu'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import GroceryStore from '../components/ServiceComps/GroceryStore'

const Services = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [topRest, setTopRest] = useState(null)

    const fetchTopRest = async () => {
        const requestBody = {
            "country": "Ethiopia",
            "city": "Addis Ababa",
            "latitude": 9.03,
            "longitude": 38.74,
            "type": 1,
            "user_id": null,
            "cuisines": [],
            "delivery_time": false,
            "expected_delivery_time": null,
            "custom_rate": false,
            "user_rate": null

        };
        try {
            const res = await fetch(import.meta.env.VITE_API_URI + '/api/food/get_stores_nearest_citytoprate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: JSON.stringify(requestBody)
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setTopRest(data);
            setIsLoading(false);
            console.log(topRest);


        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    useEffect(() => {
        fetchTopRest();
        // console.log(topRest);
    }, [])

    return (
        <div className='pb-24'>
            <Navbar />
            <SearchBar />
            <ServiceCard />
            <Explore />
            <Offers />
            <>
                <div className='w-full px-4'>
                    <h2 className='text-[#2F2F3F] text-lg font-medium'>Top-rated restaurants</h2>
                    {isLoading ? <div>Loading...</div> : topRest && topRest.stores.map((store, index) => (

                        store.stores.slice(0, 1).map((store, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className='mt-6 w-max' onClick={() => navigate('/restaurant')}>
                                    {/* Top */}
                                    <img src={store.image_url} alt="" />
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
                            </div>
                        ))
                    ))}
                </div>
            </>
            <GroceryStore />
            <Menu />
        </div>
    )
}

export default Services