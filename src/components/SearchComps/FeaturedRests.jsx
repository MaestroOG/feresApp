import React, { useContext, useEffect, useState } from 'react'
import FeaturedRestsCard from './FeaturedRestsCard'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';

const FeaturedRests = () => {
    const [searchResult, setSearchResult] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { searchTerm } = useContext(FeresContext)
    const navigate = useNavigate();


    const fetchSearchResult = async () => {
        const requestBody = {
            "city": "Addis Ababa",
            "city_id": "6220e8c72a4f11b34835b2ef",
            "country": "Ethiopia",
            "latitude": 9.03,
            "longitude": 38.74,
            "search_value": searchTerm,
            "type": 1
        }

        try {
            setIsLoading(true)
            const response = await fetch(import.meta.env.VITE_API_URI + "/api/search_items_and_stores", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(requestBody)
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSearchResult(data)
            setIsLoading(false)
            console.log(searchResult)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(searchTerm)
        if (searchTerm.length > 0) {
            fetchSearchResult();
        }
    }, [searchTerm])
    return (
        <div className='mt-12 px-4'>
            {searchResult && <h2 className='text-base text-[#2F2F3F] font-medium'>Featured restaurants</h2>}
            {isLoading ? <div className='text-center'>Loading...</div> : searchResult.hasOwnProperty('message') ? searchResult.stores.map(store => (
                store.stores.map((store, index) => (
                    <FeaturedRestsCard key={index} title={store.name} desc={store.Description} userRate={store.user_rate} userRateQuantity={store.user_rate_count} img={store.image_url} delivery={store.delivery_time} onClick={() => navigate(`/restaurant/${store._id}`)} />
                ))
            )) : <div className='mt-8 text-center'>No Restaurant Found</div>}

            {/* <FeaturedRestsCard img={assets.featured_rest_img} title={"KFC Eastlight"} desc={"Burger, Fast Food, American..."} userRate={"4.50"} userRateQuantity={"50+"} price={"150.00"} delivery={"40"} onClick={() => navigate('/restaurant')} /> */}

        </div>
    )
}

export default FeaturedRests