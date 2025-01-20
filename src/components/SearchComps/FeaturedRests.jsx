import React, { useContext, useEffect, useState } from 'react'
import FeaturedRestsCard from './FeaturedRestsCard'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { FeresContext } from '../../context/FeresContext';
import { useDispatch, useSelector } from 'react-redux';
import { usePost } from '../../servies/usePost';
import Loader from '../Loader';
import Spinner from '../Spinner';
import axios from 'axios';


const FeaturedRests = ({ type, stores }) => {
    const searchData = useSelector((state) => state.search.searchData);

    const [searchMarts, setSearchMarts] = useState(null)
    const [filteredStores, setFilteredStores] = useState(null)
    const [searchResult, setSearchResult] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { searchTerm } = useContext(FeresContext)
    const navigate = useNavigate();

    const { post, loading, error } = usePost();

    let controller;

    const fetchMarts = async () => {
        const endpoint = import.meta.env.VITE_API_URI + '/api/e-commerce/search_items_by_name';

        // Abort the previous request if it exists
        if (controller) {
            controller.abort();
        }

        // Create a new AbortController instance
        controller = new AbortController();

        try {
            const response = await axios.post(
                endpoint,
                { name: searchData },
                { signal: controller.signal } // Pass the signal to the Axios request
            );
            setSearchMarts(response.data);
        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                console.log("Request canceled:", error.message);
            } else {
                console.log("Error:", error.message);
            }
        }
    };


    const fetchSearchResult = async () => {
        const requestBody = {
            "city": "Addis Ababa",
            "city_id": "6220e8c72a4f11b34835b2ef",
            "country": "Ethiopia",
            "latitude": 9.03,
            "longitude": 38.74,
            "search_value": searchData,
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

        console.log(stores)
        console.log(searchData)
        if (searchData.length > 0) {
            if (type === 'mart') {
                fetchMarts();
            }
            if (type === 'restaurants') {
                fetchSearchResult()
            }
        }
    }, [searchData])
    return (
        <>
            <h2 className='text-base text-[#2F2F3F] font-medium mt-3 pt-4 px-4'>Featured {type}</h2>
            <div className='px-4 overflow-x-auto no-scrollbar'>

                {isLoading && <Spinner />}
                {searchResult && searchResult.hasOwnProperty('message') ? (
                    <div className='flex overflow-x-auto space-x-6 no-scrollbar'>
                        {searchResult?.stores.map(store => (
                            store?.stores.map((store, index) => (
                                <div key={index}
                                    className="grid grid-rows-2 gap-y-4 min-w-[300px] max-w-[300px] shrink-0 pr-3">
                                    <FeaturedRestsCard key={index} title={store.name} desc={store.Description} userRate={store.user_rate} userRateQuantity={store.user_rate_count} img={store.image_url} delivery={store.delivery_time} onClick={() => navigate(`/restaurant/${store._id}`)} />
                                </div>
                            ))
                        ))}
                    </div>
                ) : null}

                {!searchResult && stores && <div className='flex overflow-x-auto no-scrollbar no-scrollbar'>
                    {stores.stores.map(store => (
                        store.stores.slice(0, 15).map(st => (
                            <>
                                <div key={st?._id} className="grid grid-cols-2 gap-6 mr-6 min-w-[300px] max-w-[300px]"
                                    style={{
                                        gridTemplateRows: 'repeat(auto-fill, minmax(150px, 1fr))',
                                        width: `${Math.ceil(st?.length / 4) * 100}%`, // Dynamically adjust the width for scrolling
                                    }}>
                                    <FeaturedRestsCard key={st?._id} title={st?.name} desc={st?.Description} userRate={st?.user_rate} userRateQuantity={st?.user_rate_count} img={st?.image_url} delivery={st?.delivery_time} onClick={() => navigate(`/restaurant/${st?._id}`)} />
                                </div>
                            </>
                        ))
                    ))}
                </div>}
                {!searchResult && stores && <div className='flex overflow-x-auto no-scrollbar no-scrollbar'>
                    {stores.stores.map(store => (
                        store.stores.slice(15, 30).map(st => (
                            <>
                                <div key={st?._id} className="grid grid-cols-2 gap-6 mr-6 min-w-[300px] max-w-[300px]"
                                    style={{
                                        gridTemplateRows: 'repeat(auto-fill, minmax(150px, 1fr))',
                                        width: `${Math.ceil(st?.length / 4) * 100}%`, // Dynamically adjust the width for scrolling
                                    }}>
                                    <FeaturedRestsCard key={st?._id} title={st?.name} desc={st?.Description} userRate={st?.user_rate} userRateQuantity={st?.user_rate_count} img={st?.image_url} delivery={st?.delivery_time} onClick={() => navigate(`/restaurant/${st?._id}`)} />
                                </div>
                            </>
                        ))
                    ))}
                </div>}

                {loading && <Loader />}
                {error && <div>An Error Occurred</div>}
                {searchMarts && searchMarts?.success && <div className='flex overflow-x-auto space-x-6 no-scrollbar'>
                    {searchMarts?.foundItems?.map(items => (
                        <div key={items?._id} className='grid grid-rows-2 gap-y-4 min-w-[300px] max-w-[300px] shrink-0 pr-3'>
                            <FeaturedRestsCard onClick={() => navigate(`/ecommerce/mart/${items?.store_id}`)} key={items?._id} title={items?.name} desc={items?.store_name} img={items?.image_url[0]} />
                        </div>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default FeaturedRests





