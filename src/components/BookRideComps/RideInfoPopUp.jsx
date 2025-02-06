import React, { useContext, useEffect, useState, useRef } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'
import { usePost } from '../../servies/usePost'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setOrderStatus, setProviderInfo } from '../../redux/slices/cartDetail'
import { Loader } from '@googlemaps/js-api-loader'
import CountDownTimer from './CountDownTimer'
import { setUserChat } from '../../redux/slices/chatSlice'
import axios from 'axios'
import Spinner from '../Spinner'


const RideInfoPopUp = () => {
    const { post, error } = usePost()
    const userDetail = useSelector((state) => state.userAuth.user)
    const dispatch = useDispatch()
    const { setRideInfoPop } = useContext(FeresContext)
    const [currentAddress, setCurrentAddress] = useState("Loading current location...")
    const [progress, setProgress] = useState(1);
    const [loading, setLoading] = useState(false)
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    const mapRef = useRef(null)
    const [timerData, setTimerData] = useState(null)
    const [uniquOrderId, setUniqueOrderId] = useState(null)
    const [order_status_details, setOrder_status_details] = useState([])
    const cartDetails = useSelector((state) => state.cartDetails.cartItemData)


    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);

    function formatDate(timestamp) {
        const date = new Date(timestamp);

        // Options for formatting the month, day, year, hour, and minute
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        // Get hours and minutes
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Determine AM or PM
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12; // Convert to 12-hour format, and ensure 12 is used instead of 0

        // Combine the date and time
        return `${formattedDate} : ${hours}:${minutes} ${ampm}`;
    }

    const dateGetiing = (currentStatus) => {


        const findedOjb = order_status_details.find((item) => {
            if (item.status == currentStatus) {
                return item
            }
        })
        const date = formatDate(findedOjb?.date)
        return date
    }


    const callApi = async () => {
        try {
            const response = await post('/api/user/get_order_status', {

                server_token: userDetail?.token,
                user_id: userDetail?.user_id,
                order_id: userDetail?.order_id

            });
            const data = response
            setTimerData(data?.kitchen_time + selectedResturant?.store?.delivery_time)
            setOrder_status_details(response.order_status_details)
            dispatch(setProviderInfo({
                provider_id: response?.provider_id,
                provider_first_name: response?.provider_first_name,
                provider_last_name: response?.provider_last_name,
                provider_image: response?.provider_image,
                provider_country_phone_code: response?.provider_country_phone_code,
                provider_phone: response?.provider_phone,
                user_rate: response?.user_rate,
            }))

            if (response?.delivery_status != 0) {
                if (response?.delivery_status == 111) {
                    console.log('order rejected go ack');
                } else {


                    setProgress(response?.delivery_status)
                    dispatch(setOrderStatus(response?.delivery_status))
                    dispatch(setProviderInfo({
                        provider_id: response?.provider_id,
                        provider_first_name: response?.provider_first_name,
                        provider_last_name: response?.provider_last_name,
                        provider_image: response?.provider_image,
                        provider_country_phone_code: response?.provider_country_phone_code,
                        provider_phone: response?.provider_phone,
                        user_rate: response?.user_rate,
                    }))
                }
            } else if (response?.delivery_status == 25) {

                dispatch(setProviderInfo({
                    provider_id: response?.provider_id,
                    provider_first_name: response?.provider_first_name,
                    provider_last_name: response?.provider_last_name,
                    provider_image: response?.provider_image,
                    provider_country_phone_code: response?.provider_country_phone_code,
                    provider_phone: response?.provider_phone,
                    user_rate: response?.user_rate,
                }))
                setTimeout(() => {
                    navigate('/raterider');
                }, 5000);
            } else {
                setProgress(response?.order_status)
                dispatch(setOrderStatus(response?.delivery_status))
            }

            setUniqueOrderId(data.unique_id)


        } catch (error) {
            console.error('Error calling API:', error);
        }

    };

    const initializeMap = (latitude, longitude) => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_MAP_API_KEY,
            version: 'weekly',
            libraries: ['places'],
        })

        loader.load().then(() => {
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: latitude, lng: longitude },
                zoom: 15,
            })

            new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map,
                icon: {
                    url: assets.location_green, // Custom location icon
                    scaledSize: new google.maps.Size(40, 40),
                },
            })

            const geocoder = new google.maps.Geocoder()
            geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    setCurrentAddress(results[0].formatted_address)
                } else {
                    setCurrentAddress('Unable to retrieve address')
                }
            })
        })
    }

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    initializeMap(latitude, longitude)
                },
                () => {
                    setCurrentAddress('Unable to retrieve location')
                }
            )
        } else {
            setCurrentAddress('Geolocation not supported by your browser')
        }
    }, [])

    useEffect(() => {
        callApi();
        intervalRef.current = setInterval(callApi, 6000);

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [])


    const handleOrderChat = async () => {
        setLoading(true)
        try {
            const response = await axios.post('https://farasanya.feres.co/get_user_chat_with_admin', {
                user_id: userDetail?.user_id,
                chat_type: "user_admin",
                order_id: userDetail?.order_id // Use appropriate key for FAQ ID
            });
            let roomId;
            console.log('response', response.data);
            if (response.data.chat) {
                roomId = response.data.chat._id
                dispatch(setUserChat(response.data.chat.message))
            } else {
                roomId = response.data.room_id
            }
            navigate(`/feressupport/${roomId}`);
        } catch (error) {
            console.error('Error fetching chat room:', error);
        } finally {
            setLoading(false);
        }

        // () => navigate('/feressupport')
    }

    return (
        <div className='fixed bottom-0 left-0 max-h-[90vh] w-full rounded-tr-[13px] rounded-tl-[13px] overflow-y-auto pb-40 transition-all z-[104] bg-gray-200'>
            <div className='sticky top-0 w-full z-20 py-2 bg-white px-3'>
                <div className='pb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' onClick={() => setRideInfoPop(false)} />
                </div>
                <div className='flex items-center justify-between'>
                    {timerData !== null ? (
                        <CountDownTimer initialTimeInSeconds={timerData} />
                    ) : (
                        <Spinner />
                    )}
                    {/* <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1> */}
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
            </div>
            <p className='pt-5 text-[#2F2F3F] text-xl bg-white px-3 font-bold'>Order progress</p>
            {/* Order Progress */}
            <div className='relative bg-white pb-[22px] rounded-b-[20px] px-3'>
                <div className='flex items-center gap-2 pt-6' >

                    {progress > 1 ? <><p className='text-[#979797]'>{new Date().getHours()}:{new Date().getMinutes()}</p> <img className='ml-[10px]' src='/tick-icon.svg' alt="" /> </> : <img className='ml-[10px]' src={progress === 1 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 1 ? <p className='text-base text-[#2F2F3F]'>{selectedResturant?.store?.name} has been confirmed your order</p> : <div > <p className='text-base text-[#2F2F3F]'>Waiting for {selectedResturant?.store?.name} to confirm your order</p></div>}
                </div>
                <hr className={`rotate-90 w-10 absolute mb-5 border-[#0AB247] ${progress > 1 ? 'top-[6rem] left-[61px]' : 'top-20 left-[0.845rem]'}`} />
                <div className='flex items-center gap-2 mt-16 bg-white' >

                    {progress > 5 ? <> <p className='text-[#979797]'>{new Date().getHours()}:{new Date().getMinutes()}</p><img className='ml-[10px]' src='/tick-icon.svg' alt="" /></> : <img className='ml-[10px]' src={progress > 1 && progress <= 5 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 5 ? <div> <p className='text-base text-[#2F2F3F]'>Your order is ready for pickup</p> </div> : <p className='text-base text-[#979797]'>Preparing your order</p>}
                </div>
                {/* <hr className='rotate-90 w-10 absolute top-36 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' >
                    {progress > 9 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress >= 7 && progress < 9 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    <p className='text-base text-[#979797]'>Your order is ready</p>
                </div> */}
                <hr className={`rotate-90 w-10 absolute mb-5 border-[#0AB247] ${progress > 7 ? 'top-[12.2rem] left-[61px]' : 'top-[10rem] left-[0.845rem]'}`} />
                <div className='flex items-center gap-2 mt-16 bg-white' >
                    {progress > 7 ? <> <p className='text-[#979797]'>{new Date().getHours()}:{new Date().getMinutes()}</p><img className='ml-[10px]' src='/tick-icon.svg' alt="" /> </> : <img className='ml-[10px]' src={progress >= 7 && progress <= 9 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 7 ? <div> <p className='text-base text-[#2F2F3F]'>Rider has been assgined to your order</p> </div> : <p className='text-base text-[#979797]'>Looking for a rider</p>}
                </div>
                <hr className={`rotate-90 w-10 absolute  ${progress > 7 ? 'top-[18rem] left-[61px]' : 'top-[21.5rem] left-[0.845rem]'} mb-5 border-[#0AB247]`} />
                <div className='flex items-center gap-2 mt-16 bg-white' >
                    {progress > 13 ? <><p className='text-[#979797]'>{new Date().getHours()}:{new Date().getMinutes()}</p> <img className='ml-[10px]' src='/tick-icon.svg' alt="" /></> : <img className='ml-[10px]' src={progress >= 9 && progress <= 15 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 13 ? <div> <p className='text-base text-[#2F2F3F]'>Rider has picked up your order</p> </div> : <p className='text-base text-[#979797]'>The rider is on their way to {selectedResturant?.store?.name}</p>}
                </div>
                <hr className={`rotate-90 w-10 absolute mb-5 border-[#0AB247] ${progress > 13 ? 'top-[23.9rem] left-[61px]' : 'top-[16.2rem] left-[0.845rem]'}`} />
                <div className='flex items-center gap-2 mt-16' onClick={() => {
                    navigate('/raterider')
                }}>
                    {progress == 25 ? <><p className='text-[#979797]'>{new Date().getHours()}:{new Date().getMinutes()}</p><img className='ml-[10px]' src='/tick-icon.svg' alt="" /></> : <img className='ml-[10px]' src={progress >= 19 && progress <= 25 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress == 25 ? <div><p className='text-base text-[#2F2F3F]'>Your order is delivered</p> </div> : <p className='text-base text-[#979797]'>The rider is on their way to you</p>}
                </div>
            </div>
            {/* Order Info */}
            <div className='pt-7 mt-3 mb-4 bg-white rounded-[13px] px-3'>
                <p className='text-[#2F2F3F] text-xl font-bold'>Order #{uniquOrderId && uniquOrderId}</p>
                <div className='mt-4'>
                    {cartDetails?.stores?.map(items => (
                        items?.items?.map((item, index) => (
                            <div className='flex items-center justify-between gap-2' key={index}>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#2F2F3F] text-base'>{item?.quantity} X</p>
                                    <p className='text-[#2F2F3F] text-base'>{item?.name}</p>
                                </div>
                                <div className='flex items-center justify-between mb-3'>
                                    <p className='text-[#2F2F3F] text-base'>ETB {item?.price * item?.quantity}</p>
                                </div>
                            </div>
                        ))
                    ))}

                </div>
                <hr className='mt-4' />
                <div className='flex items-center justify-between pt-4 bg-white pb-[24px]'>
                    <h2 className='text-[#2F2F3F] text-xl font-bold'>Total</h2>
                    <h2 className='text-[#2F2F3F] text-xl font-medium'>ETB{cartDetails?.total_cart_price}</h2>
                </div>
            </div>

            {/* Payment Info */}
            <div className='pt-7 mt-2 bg-white pb-[20px] px-3'>
                <h3 className='text-[#2F2F3F] text-base font-medium'>Payment methods</h3>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-2'>
                        <img src={cartDetails?.emurabaha_allowed ? assets.ebirr_sticker : assets.cash_sticker} alt="" />
                        <p className='font-medium text-sm text-[#2F2F3F]'>{cartDetails?.emurabaha_allowed ? 'E-birr' : 'Cash'}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-medium text-[#2F2F3F]'>ETB{cartDetails?.total_cart_price}</h3>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div
                ref={mapRef}
                style={{ width: '100%', height: '200px', borderRadius: '13px' }}
                className='border border-gray-300 pt-6 mt-2 bg-white px-3'
            ></div>

            <div className='pt-4 bg-white px-3'>
                <h3 className='text-[#2F2F3F] text-xl font-medium'>Delivery address</h3>
            </div>
            <div className='flex items-center justify-between pt-3 bg-white pb-[20px] rounded-b-[13px] px-3'>
                <div className='flex items-center gap-2'>
                    <img src={assets.location_green} alt="" />
                    <p className='text-[#0AB247] text-base'>{currentAddress}</p>
                </div>
                {/* <img src={assets.edit_02} alt="" /> */}
            </div>

            {/* Buttons */}
            <div className='fixed bottom-0 left-0 w-full px-2 py-4 bg-white'>
                <button className='text-[#2F2F3F] text-lg font-medium bg-[#F8F8F8] p-[16px] rounded-[30px] w-full mb-3' onClick={handleOrderChat}>Get help</button>
                {progress == 25 && <button className='text-white text-lg font-medium bg-[green] p-[16px] rounded-[30px] w-full' onClick={() => navigate('/raterider')}>Rate your rider</button>}
                {progress < 5 && <button className='text-white text-lg font-medium bg-[#E92D53] p-[16px] rounded-[30px] w-full' onClick={() => navigate('/cancelorder')}>Cancel order</button>}
            </div>
        </div>
    )
}

export default RideInfoPopUp