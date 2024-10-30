import React, { useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const UpdatePhone = () => {
    const [number, setNumber] = useState("")
    const navigate = useNavigate()
    return (
        <>
            <Container className={'py-5 flex items-center gap-[20vw]'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-xl font-bold'>Update phone number</h1>
            </Container>

            <Container className={'mt-6'}>
                <h2 className='text-[#B1B1B1] text-lg'>We’ll send a code for verification</h2>
                <div className='flex items-center gap-3 mt-4'>
                    <Link to={'/deliveryservice/deliverydetails/senderdetails/updatephone/selectphonecountry'} className='w-[129px] h-[58px] p-2 rounded-xl bg-[#F8F8F8] flex items-center justify-between'>
                        <img src={assets.country_flag} alt="" />
                        <p className='font-medium text-[#2F2F3F]'>+44</p>
                        <img src={assets.arrow_down} alt="" />
                    </Link>
                    <div className='w-[259px] h-[58px] rounded-xl py-2 px-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] flex items-center justify-between transition-all'>
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className='w-full bg-transparent outline-none h-full' />
                        {number.length > 0 && <img src={assets.close} alt="" onClick={() => setNumber("")} />}
                    </div>
                </div>
            </Container>

            <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white'}>
                <button className='w-full p-4 rounded-full bg-[#0AB247] text-white text-lg font-medium'>Confirm</button>
            </Container>
        </>
    )
}

export default UpdatePhone