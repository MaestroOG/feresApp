import React from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'

const SenderLocation = () => {
    const navigate = useNavigate()
    return (
        <div className='relative'>
            <div className='p-3 rounded-full bg-white w-max absolute top-5 left-3'>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
            </div>
            <img src={assets.map_full} alt="" />
            <img src={assets.map_pointer} alt="" className='absolute top-[40%] left-52' />
            <div className='p-3 rounded-full bg-white w-max absolute bottom-48 right-5'>
                <img src={assets.gps_01} alt="" className='' />
            </div>
            <Container className='fixed bottom-0 left-0 w-full bg-white py-5'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='text-[#767578] text-lg'>Deliver to</h4>
                        <h3 className='text-[#2F2F3F] font-medium text-lg'>Elgin St. Celina, Delaware 10299</h3>
                    </div>
                    <img src={assets.search} alt="" onClick={() => navigate('/deliveryservice/deliverydetails/senderdetails/senderlocation/search')} />
                </div>
                <button className='p-4 rounded-full w-full bg-[#0AB247] text-white text-xl font-medium mt-5'>Confirm location</button>
            </Container>
        </div>
    )
}

export default SenderLocation