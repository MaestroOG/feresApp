import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const DeliveryServiceNav = () => {
    const navigate = useNavigate()
    return (
        <Container className={'py-5 flex items-center justify-between'}>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[#2F2F3F] text-xl font-bold'>Enter destination</h1>
            <img src={assets.maps_location_02} alt="" onClick={() => navigate('/selectlocation')} />
        </Container>
    )
}

export default DeliveryServiceNav