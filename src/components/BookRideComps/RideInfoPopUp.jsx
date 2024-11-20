import React, { useContext, useEffect, useState, useRef } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'
import { usePost } from '../../servies/usePost'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProviderInfo } from '../../redux/slices/cartDetail'
import { Loader } from '@googlemaps/js-api-loader'
import CountDownTimer from './CountDownTimer'


const RideInfoPopUp = () => {
    const { post, error } = usePost()
    const userDetail = useSelector((state) => state.userAuth.user)
    const dispatch = useDispatch()
    const { setRideInfoPop } = useContext(FeresContext)
    const [currentAddress, setCurrentAddress] = useState("Loading current location...")
    const [progress, setProgress] = useState(1);
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    const mapRef = useRef(null)
    const [timerData, setTimerData] = useState(null)

    const selectedResturant = useSelector((state) => state.selectedResturant.selectedResturant);

    const callApi = async () => {
        try {
            const response = await post('/api/user/get_order_status', {

                server_token: userDetail.token,
                user_id: userDetail.user_id,
                order_id: userDetail.order_id

            });
            const data = response
            if (response?.delivery_status != 0) {
                if (response?.delivery_status == 111) {
                    console.log('order rejected go ack');
                } else {
                    setProgress(response?.delivery_status)
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
                console.log('dfsdsda', response?.delivery_status);
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
            }

            setTimerData(data.kitchen_time)

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
        intervalRef.current = setInterval(callApi, 10000);

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [])

    return (
        <div className='fixed bottom-0 left-0 max-h-[90vh] w-full bg-white px-3 rounded-tr-[13px] rounded-tl-[13px] overflow-y-auto pb-48 transition-all z-[104]'>
            <div className='sticky top-0 bg-white w-full z-20 py-2'>
                <div className='mb-4 pt-2'>
                    <img src={assets.popup_down_arrow} alt="" className='mx-auto' onClick={() => setRideInfoPop(false)} />
                </div>
                <div className='flex items-center justify-between'>
                    {timerData !== null ? (
                        <CountDownTimer initialTimeInSeconds={timerData} />
                    ) : (
                        <p>Loading timer...</p>
                    )}
                    {/* <h1 className='text-[#2F2F3F] text-4xl font-medium'>15:25</h1> */}
                    <p className='text-lg text-[#979797]'>Estimated time of delivery</p>
                </div>
            </div>
            <p className='mt-5 text-[#2F2F3F] text-xl font-medium'>Order progress</p>
            {/* Order Progress */}
            <div className='relative'>
                <div className='flex items-center gap-2 mt-6' >
                    {progress > 1 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress === 1 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 1 ? <p className='text-base text-[#2F2F3F]'>{selectedResturant?.store?.name} has been confirmed your order</p> : <p className='text-base text-[#2F2F3F]'>Waiting for {selectedResturant?.store?.name} to confirm your order</p>}
                </div>
                <hr className='rotate-90 w-10 absolute top-14 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' >
                    {progress > 5 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress > 1 && progress <= 5 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 5 ? <p className='text-base text-[#2F2F3F]'>Your order is ready for pickup</p> : <p className='text-base text-[#979797]'>Preparing your order</p>}
                </div>
                {/* <hr className='rotate-90 w-10 absolute top-36 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' >
                    {progress > 9 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress >= 7 && progress < 9 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    <p className='text-base text-[#979797]'>Your order is ready</p>
                </div> */}

                <hr className='rotate-90 w-10 absolute top-36 -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' >
                    {progress > 7 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress >= 7 && progress <= 9 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 7 ? <p className='text-base text-[#2F2F3F]'>Rider has been assgined to your order</p> : <p className='text-base text-[#979797]'>Looking for a rider</p>}
                </div>
                <hr className='rotate-90 w-10 absolute top-[230px] -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' >
                    {progress > 13 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress >= 9 && progress <= 15 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress > 13 ? <p className='text-base text-[#2F2F3F]'>Rider has picked up your order</p> : <p className='text-base text-[#979797]'>The rider is on their way to {selectedResturant?.store?.name}</p>}
                </div>
                <hr className='rotate-90 w-10 absolute top-[318px] -left-2 mb-5' />
                <div className='flex items-center gap-2 mt-16' onClick={() => {
                    navigate('/raterider')
                }}>
                    {progress == 25 ? <img src='/tick-icon.svg' alt="" /> : <img src={progress >= 19 && progress <= 25 ? assets.order_progress : assets.order_progress_2} alt="" />}
                    {progress == 25 ? <p className='text-base text-[#2F2F3F]'>your order is delivered</p> : <p className='text-base text-[#979797]'>The rider is on their way to you</p>}
                </div>
            </div>
            {/* Order Info */}
            <div className='mt-10 mb-4'>
                <p className='text-[#2F2F3F] text-xl font-medium'>Order #792SH</p>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-[#2F2F3F] text-base'>1 X 7 Piece Chicken</p>
                    <p className='text-[#2F2F3F] text-base'>ETB 1,450</p>
                </div>
                <hr className='mt-4' />
                <div className='flex items-center justify-between mt-4'>
                    <h2 className='text-[#2F2F3F] text-xl font-medium'>Total</h2>
                    <h2 className='text-[#2F2F3F] text-xl font-medium'>ETB280</h2>
                </div>
            </div>

            {/* Payment Info */}
            <div className='mt-9'>
                <h3 className='text-[#2F2F3F] text-base font-medium'>Payment methods</h3>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.ebirr_sticker} alt="" />
                        <p className='font-medium text-sm text-[#2F2F3F]'>E-birr</p>
                    </div>
                    <div>
                        <h3 className='text-base font-medium text-[#2F2F3F]'>ETB280</h3>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div
                ref={mapRef}
                style={{ width: '100%', height: '200px', borderRadius: '13px' }}
                className='border border-gray-300 mt-8'
            ></div>

            <div className='mt-4'>
                <h3 className='text-[#2F2F3F] text-xl font-medium'>Delivery address</h3>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-center gap-2'>
                    <img src={assets.location_green} alt="" />
                    <p className='text-[#0AB247] text-base'>{currentAddress}</p>
                </div>
                <img src={assets.edit_02} alt="" />
            </div>

            {/* Buttons */}
            <div className='fixed bottom-0 left-0 w-full px-2 py-4 bg-white'>
                <button className='text-[#2F2F3F] text-lg font-medium bg-[#F8F8F8] p-[16px] rounded-[30px] w-full mb-3' onClick={() => navigate('/feressupport')}>Get help</button>
                {progress == 25 ? <button className='text-white text-lg font-medium bg-[green] p-[16px] rounded-[30px] w-full' onClick={() => navigate('/raterider')}>Rate your rider</button> : <button className='text-white text-lg font-medium bg-[#E92D53] p-[16px] rounded-[30px] w-full' onClick={() => navigate('/cancelorder')}>Cancel order</button>}
            </div>
        </div>
    )
}

export default RideInfoPopUp