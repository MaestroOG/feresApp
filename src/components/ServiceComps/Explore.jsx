import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import ExploreCard from './ExploreCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setBaseData } from '../../redux/slices/basePriceSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader'

const Explore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.userAuth.user)
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    const handlePrice = async () => {
        const response = await axios.post('https://suuq.feres.co/service_details')
        dispatch(setBaseData(response.data))
    }

    const handleGetServices = async (city_id) => {
        try {
            setLoading(true)
            const response = await axios.post('https://demo.feres.co/get_delivery_types', { cityname: city_id, service_type: 0 })
            setServices(response?.data?.type_data)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userDetail) {
            handlePrice()
            handleGetServices(userDetail.city)
        }
    }, [userDetail])

    if (loading) {
        return <Loader />
    }
    return (
        <div className='w-full'>
            <h3 className='text-[18px] font-medium px-4'>Explore Feres</h3>

            <div className='flex flex-row gap-3 overflow-y-scroll explore-card'>
                {/* Card */}
                {services?.map((item) => {
                    return (
                        <ExploreCard name={item?.typename.toUpperCase()} img={`https://uploads.feres.co/ride/${item?.type_image_url}`} onClick={() => { item?.typename == 'FOOD' ? navigate('/allrestaurants') : item?.typename == "Parcel" ? navigate('/deliveryservice') : item?.typename === 'MART' ? navigate('/ecommerce') : null }} key={item?._id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Explore