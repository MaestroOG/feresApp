import React, { useState } from 'react'
import Container from '../../../components/Container'
import { assets } from '../../../assets/assets'

const ItemZoom = () => {
    const cardImgSrc = [assets.redmi_featured, assets.redmi_featured_2, assets.redmi_featured_3, assets.redmi_featured_4]

    const [index, setIndex] = useState(0);

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(cardImgSrc.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const nextSlide = () => {
        if (current === cardImgSrc.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }
    return (
        <div className='flex items-center justify-center h-screen w-full'>
            <div className='w-[398px] h-[811px] flex flex-col justify-between rounded-xl bg-[#00000008] py-3'>
                <Container className={'flex items-center justify-between'}>
                    <img src={assets.cancel_icon} alt="" />
                    <p className='text-[#2F2F3F] text-lg font-medium'>10%</p>
                </Container>
                <img src={cardImgSrc[current]} alt="" onClick={nextSlide} />
                <Container className={'flex items-end justify-between'}>
                    <img src={assets.search_minus} alt="" />
                    <img src={assets.search_add} alt="" />
                </Container>
            </div>
        </div>
    )
}

export default ItemZoom