import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const DeliveryItemNav = () => {
    const navigate = useNavigate();
    return (
        <Container className={'py-5 bg-white z-30 sticky top-0 left-0 flex items-center gap-[29vw]'}>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[#2F2F3F] text-xl font-bold'>Item details</h1>
        </Container>
    )
}

export default DeliveryItemNav