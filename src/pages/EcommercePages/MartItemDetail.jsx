import React from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'

const MartItemDetail = () => {
    return (
        <div>
            {/* Top Bar */}
            <Container className={'py-5 flex items-center justify-between'}>
                <img src={assets.arrow_left} alt="" className='invert' />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Product details</h1>
                <button className='border border-[#EEEEEE] rounded-xl p-2'>
                    <img src={assets.favourite} alt="" />
                </button>
            </Container>
        </div>
    )
}

export default MartItemDetail