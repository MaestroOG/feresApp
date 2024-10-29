import React from 'react'
import Container from '../../Container'
import { assets } from '../../../assets/assets'

const SenderDetailNav = () => {
    return (
        <Container className={'py-5 flex items-center gap-[26vw] sticky top-0 left-0 bg-white z-30'}>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h1 className='text-[#2F2F3F] text-xl font-bold'>Sender details</h1>
        </Container>
    )
}

export default SenderDetailNav