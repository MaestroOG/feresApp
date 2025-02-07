import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceComps/ServiceCard'
import Explore from '../components/ServiceComps/Explore'
import Offers from '../components/ServiceComps/Offers'
import Menu from '../components/ServiceComps/Menu'
import { assets } from '../assets/assets'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import DeliveryTimeLabel from '../components/Labels/deliveryTime'
import ChooseAddressPopup from '../components/ServiceComps/ChooseAddressPopup'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePost } from '../servies/usePost'
import { useDispatch } from 'react-redux'
import { setSearchData } from '../redux/slices/searchSlice'
import axios from 'axios'
import { loginUser } from '../redux/slices/userAuthSlice'
import { v4 as uuidv4 } from "uuid";



const Services = () => {
    const navigate = useNavigate();
    const [isBackHandled, setIsBackHandled] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [topRest, setTopRest] = useState(null)
    const [groceryStore, setGroceryStore] = useState(null)
    const [addressPop, setAddressPop] = useState(false)
    const [ads, setAds] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const { loading, error, post } = usePost()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleBackPress = () => {
        if (window.kmpJsBridge && typeof window.kmpJsBridge.callNative === "function") {
            window.kmpJsBridge.callNative("GoBack", JSON.stringify({}), function (data) {
                console.log("Returned to Native App:", data);
            });
        } else {
            console.warn("Native bridge not available, using fallback navigation.");
            navigate(-1); // Normal back navigation as a fallback
        }
    };

    useEffect(() => {
        const onBackPress = (event) => {
            event.preventDefault();
            handleBackPress();
        };

        // Listen for hardware back button press (for Android)
        window.addEventListener("popstate", onBackPress);

        return () => {
            window.removeEventListener("popstate", onBackPress);
        };
    }, [navigate]);

    const getAds = async () => {
        try {
            const endpoint = '/api/e-commerce/get_category_slides'
            const data = await post(endpoint, {
                ads_for: location.pathname === '/ecommerce' ? 2 : 1
            })
            if (data && data?.success) {
                setAds(data.images)
                console.log(ads);
            }

        } catch (error) {
            console.log(error.message)
        }
    }


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

    const getUserData = async () => {
        const params = new URLSearchParams(location.search);
        const userData = {
            user_id: params.get('user_id'),
        };




        if (userData.user_id) {
            try {
                const userDetailsResponse = await axios.post('https://demo.feres.co/getuserdetail', userData);
                const user = userDetailsResponse.data.user
                dispatch(loginUser({
                    address: user.address,
                    app_version: user.app_version,
                    cart_unique_token: uuidv4(),
                    city: user.city,
                    country: user.country,
                    country_detail: {
                        countryname: user.country,
                        countryphonecode: user.country_phone_code,
                        _id: user.countryid,
                    },
                    country_phone_code: user.country_phone_code,
                    device_timezone: user.device_timezone,
                    device_token: user.device_token,
                    device_type: user.device_type,
                    email: user.email,
                    first_name: user.first_name,
                    is_approved: user.is_approved,
                    is_document_verified: user.is_document_verified,
                    is_ebirr_user: user.is_ebirr_user,
                    is_referral: user.is_referral,
                    last_name: user.last_name,
                    login_by: user.login_by,
                    middle_name: user.middle_name,
                    phone: user.phone,
                    picture: user.picture,
                    referral_code: user.referral_code,
                    social_unique_id: user.social_unique_id,
                    success: true,
                    token: user.token,
                    user_id: user._id,
                    zipcode: user.zipcode
                }))
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }
    };




    useEffect(() => {
        getUserData()
        dispatch(setSearchData(""))
        fetchTopRest();
        fetchGroceryStores();
        getAds();

        // console.log(topRest);
    }, [])

    return (
        <>
            <div className={`pt-20 pb-24 overflow-hidden ${addressPop && 'blur-sm'}`}>
                {/* <Navbar /> */}
                <SearchBar onClick={() => navigate('/search')} className="sticky top-0 left-0 bg-white" />
                <Slider {...settings}>
                    {ads && ads?.map(ad => (
                        <ServiceCard desc={ad?.ads_detail} img={ad?.image_for_banner} loading={loading} error={error} to={() => navigate('/allrestaurants')} />
                    ))}
                </Slider>
                <Explore />
                <Offers />
                <>
                    <div className='w-full px-2'>
                        <h2 className='text-[#2F2F3F] text-lg font-bold' onClick={() => setAddressPop(true)}>Top-rated restaurants</h2>
                        <div className='flex items-center gap-3 overflow-auto no-scrollbar'>
                            {isLoading && <Loader />}
                            {topRest && topRest.stores.map((store, index) => (

                                store.stores.slice(0, 1).map((store, index) => (
                                    <div key={index} className="flex items-center gap-4 relative">
                                        <div className='mt-6 w-max' onClick={() => navigate(`/restaurant/${store._id}`)}>
                                            {/* Top */}
                                            <img src={store.image_url} alt="" className='w-[365px] h-[166px] rounded-tr-3xl rounded-tl-3xl object-cover' />
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

                                        <DeliveryTimeLabel restaurantCordinates={store?.location} delivery_time={store?.delivery_time + store.kitchen_time} wallet_currency_code={"ETB"} />
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                </>
                <>
                    <div className='w-full px-2 mt-5'>
                        <h2 className='text-[#2F2F3F] text-lg font-bold'>Groceries stores</h2>
                        <div className='flex items-center gap-3 overflow-auto no-scrollbar'>
                            {isLoading ? <div>Loading...</div> : groceryStore && groceryStore.stores.slice(0, 2).map((store, index) => (
                                <div key={index} className="flex items-center gap-4 relative">
                                    <div className='mt-6 w-max' onClick={() => navigate(`/ecommerce/mart/${store?.category_id}`)}>
                                        {/* Top */}
                                        <img src={store.image_url} alt="" className='w-[365px] h-[166px] rounded-tr-3xl rounded-tl-3xl object-cover' />
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
                                    <DeliveryTimeLabel restaurantCordinates={store?.location} delivery_time={store?.delivery_time + store.kitchen_time} wallet_currency_code={"ETB"} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>

                {/* <GroceryStore /> */}
                <Menu />
            </div>

            {addressPop && <ChooseAddressPopup onClick={() => setAddressPop(false)} />}

        </>
    )
}

export default Services