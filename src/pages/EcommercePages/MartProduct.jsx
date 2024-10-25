import React from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import MartProductCard from './MartProductCard'
import EcommerceAddBasket from './EcommerceAddBasket'

const MartProduct = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container className={'py-5 flex items-center gap-[26vw]'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Dairy & Eggs</h1>
            </Container>
            <Container className={'grid grid-cols-2 gap-4 mt-5'}>
                <MartProductCard />
                <MartProductCard />
                <MartProductCard isDiscount={true} />
                <MartProductCard />
                <MartProductCard />
                <MartProductCard isDiscount={true} />
            </Container>

            <EcommerceAddBasket />
        </div>
    )
}

export default MartProduct