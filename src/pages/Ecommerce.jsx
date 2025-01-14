import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceComps/ServiceCard'
import { assets } from '../assets/assets'
import ExploreCard from '../components/ServiceComps/ExploreCard'
import Container from '../components/Container'
import PopularStoreCard from '../components/EcommerceComps/MainPageComps/PopularStoreCard'
import { Link, useNavigate } from 'react-router-dom'
import { usePost } from '../servies/usePost'
import Spinner from '../components/Spinner'
import Loader from '../components/Loader'
import axios from 'axios'

const Ecommerce = () => {
    const { loading, error, post } = usePost();
    const [stores, setStores] = useState(null);
    const [offers, setOffers] = useState(null)
    const [offerLoading, setOfferLoading] = useState(false)
    const [offerErr, setOfferErr] = useState(false)
    const navigate = useNavigate()
    const buttons = ["Popular stores", "Grocery stores", "Specialty stores"];


    const [categories, setCategories] = useState(null)

    const fetchOffers = async () => {
        const endpoint = 'https://farasanya.feres.co/get_all_offers'
        try {
            setOfferLoading(true)
            const response = await axios.post(endpoint)
            if (response.data.success) {
                setOffers(response.data)
                console.log(offers)
            } else if (response.data.success === false) {
                setOfferErr(true)
                setOfferLoading(false)
                return;
            }
        } catch (error) {
            setOfferErr(true)
            setOfferLoading(false)
            console.log(error.message)
        } finally {
            setOfferLoading(false)
        }
    }
    const fetchStores = async () => {
        const endpoint = "/api/e-commerce/get_ecommerce_stores_list"
        try {
            const data = await post(endpoint, {});
            setStores(data);
        } catch (err) {
            console.error("Error fetching stores:", err);
        }
    }

    const fetchCategories = async () => {
        const endpoint = "/api/e-commerce/get_main_category_list"
        try {
            const data = await post(endpoint, {})
            setCategories(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    // const groupedOffers = offers?.flatMap(offer => offer?.list).reduce((acc, li) => {
    //     const key = li?.position?.position_title;
    //     if (!acc[key]) {
    //         acc[key] = [];
    //     }
    //     acc[key].push(li);
    //     return acc;
    // }, {});

    useEffect(() => {
        fetchCategories()
        fetchOffers()
        fetchStores()
    }, [])


    if (loading || offerLoading) {
        return <Loader />
    }

    if (error || offerErr) {
        return <h1>Error Fetching Offers</h1>
    }


    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <SearchBar placeholder='Search items' onClick={() => navigate('/ecommercesearch')} className="bg-white" isFixed={false} />
            <div className='text-[#2F2F3F] text-lg font-medium px-4'>
                Shop now
            </div>
            <ServiceCard />

            {/* Explore Section */}
            <div className='mt-8 w-full'>
                <div className='flex items-center justify-between px-4'>
                    <h3 className='text-[18px] font-medium'>Categories</h3>
                    <Link to={'/ecommerce/categories'} className='text-[#0AB247] font-medium'>View all</Link>
                </div>

                <div className='flex flex-row gap-5 overflow-y-scroll explore-card'>
                    {/* Card */}
                    {error && <div>An Error Occurred</div>}
                    {loading && <Spinner />}
                    {categories && categories?.success && categories?.categories.map(category => (
                        <ExploreCard onClick={() => navigate(`/ecommerce/categories/results/${category?.category_name}`)} key={category?._id} name={category?.category_name} img={category?.featured_image} />
                    ))}
                </div>
            </div>

            {/* Offers */}
            <div className='px-1 mt-10'>

                {/* Card */}
                <div className=''>
                    <div className="my-5">
                        <div className='flex items-center justify-between mb-6 px-3'>
                            <h3 className='text-[#2F2F3F] text-lg font-bold'>Special Offers</h3>
                        </div>
                        <div className='flex items-center gap-2 overflow-auto no-scrollbar'>
                            {offers && offers?.offers.map(offer => (
                                offer?.list.map(li => (
                                    <div className="flex items-center gap-2">
                                        <div className='first-of-type:pl-2 pr-3' key={li?.id} onClick={() => navigate(`/ecommerce/mart/${li?.category_id}`)}>
                                            <div className='w-36 h-44 rounded-xl bg-[#EFF7D7] p-2 px-3 relative'>
                                                <h3 className='text-[#2F2F3F]'>{li?.position?.position_title}</h3>
                                                <img src={li?.featured_image} alt="" className='absolute bottom-0 right-0 object-cover' width={"127px"} height={"179px"} />
                                                <img src={assets.ecommerce_card_shape} alt="" className='absolute bottom-0 left-0' />
                                                <p className='text-white text-[11px] z-50 absolute bottom-2 left-2'>up to <br /><span className='font-bold'>{li?.offer_detail}%</span><br /> off</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Shop By Store Type */}
            <Container className={'my-7'}>
                <h3 className='text-[#2F2F3F] text-lg font-medium my-3'>More Stores</h3>
                <div className='flex items-center gap-4 overflow-auto no-scrollbar sticky top-24 bg-white z-50 pb-3'>
                    <button className={`active rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[0]}</button>
                    <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[1]}</button>
                    <button className={`inactive rounded-full p-3 whitespace-nowrap text-lg`}>{buttons[2]}</button>
                </div>
                {loading && <Spinner />}
                {error && <div>Error Fetching Stores...</div>}
                {stores && stores?.stores?.slice(0, 5).map((store, index) => (
                    <PopularStoreCard store={store} key={index} />
                ))}
            </Container>
        </div>
    )
}

export default Ecommerce