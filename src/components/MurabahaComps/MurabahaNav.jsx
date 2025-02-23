import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const MurabahaNav = () => {
    const navigate = useNavigate()
    return (
        <Container className={'py-5 flex items-center gap-[15vw] mb-[43px]'}>
            <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            <h1 className='text-[23px] font-extrabold text-[#2F2F3F]'>Pending E-muraabaha</h1>
        </Container>
    )
}

export default MurabahaNav