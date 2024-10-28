import React from 'react'
import Container from '../Container'
import { assets } from '../../assets/assets'

const DeliveryRecentLocations = () => {
    return (
        <>
            <Container className={'flex items-center gap-3'}>
                <img src={assets.location_black} alt="" />
                <div>
                    <h2 className='text-lg text-[#2F2F3F]'>Elgin St. Celina, Delaware 10299</h2>
                    <p className='text-[#75777C] text-sm'>Melli-Beese-Ring1, Schoenfeld</p>
                </div>
            </Container>
            <hr className='my-4' />
        </>
    )
}

export default DeliveryRecentLocations