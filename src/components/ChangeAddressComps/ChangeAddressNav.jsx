import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const ChangeAddressNav = () => {
    return (
        <Container className={'flex items-center gap-[23vw] py-5'}>
            <img src={assets.arrow_left} alt="" className='invert' />
            <h1 className='text-[#2F2F3F] font-extrabold text-[23px]'>Change address</h1>
        </Container>
    )
}

export default ChangeAddressNav