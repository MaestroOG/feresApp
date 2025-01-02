import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import ExploreCard from './ExploreCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setBaseData } from '../../redux/slices/basePriceSlice'
import { useDispatch, useSelector } from 'react-redux'

const Explore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.userAuth.user)
    const [services, setServices] = useState([])

    const handlePrice =async () => {
      const response = await axios.post('https://suuq.feres.co/service_details')
      dispatch(setBaseData(response.data))
    }

    const handleGetServices = async(city_id)=>{
        const response = await axios.post('https://demo.feres.co/get_delivery_types',{ cityname : city_id })
        setServices(response?.data?.type_data)

        
    }

    useEffect(()=>{
        if(userDetail){
        handlePrice()
        handleGetServices(userDetail.city)
    }
    },[userDetail])

    console.log(services,"setServicessetServicessetServices");
    

    return (
        <div className='mt-8 w-full'>
            <h3 className='text-[18px] font-medium px-4'>Explore Feres</h3>

            <div className='flex flex-row gap-3 overflow-y-scroll explore-card'>
                {/* Card */}
                {services?.map((item)=>{
                    return ( 
                <ExploreCard name={item?.typename} img={`https://uploads.feres.co/ride/${item?.type_image_url}`} onClick={() => {item?.typename == 'FOODS' ? navigate('/allrestaurants') : item?.typename == "parcel" ? navigate('/deliveryservice') : "" }} key={item?._id}/>
                     )
                })}
                <ExploreCard name={"Delivery"} img={assets.car} onClick={() => navigate('/deliveryservice')} />
                <ExploreCard name={"Food"} img={assets.food_img} onClick={() => navigate('/allrestaurants')} />
                <ExploreCard name={"Mart"} img={assets.mart_bucket} onClick={() => navigate('/ecommerce')} />
            </div>
        </div>
    )
}

export default Explore