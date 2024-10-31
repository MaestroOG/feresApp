import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'

const SelectLocation = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container className={'flex items-center gap-[24vw] py-5'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-xl font-bold'>Enter destination</h1>
            </Container>
            <Container className={'my-5'}>
                <div className='w-[398px] h-[62px] rounded-xl py-2 px-5 flex items-center gap-3 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all'>
                    <img src={assets.search} alt="" />
                    <input type="text" className='w-full bg-transparent outline-none placeholder:text-lg placeholder:text-[#646464]' placeholder='Royal Ln. Mesa, New Jersey 454' />
                </div>
            </Container>
            <div className='w-full px-4 bg-transparent fixed bottom-4 left-0' onClick={() => navigate('/deliveryservice/deliveryoptions')}>
                <button className='text-white text-xl font-medium bg-[#0AB247] rounded-full p-4 w-full'>Confirm your drop off location</button>
            </div>
        </>
    )
}

export default SelectLocation