import React, { useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SelectPhoneCountry = () => {
    const [country, setCountry] = useState("")
    const navigate = useNavigate();
    return (
        <>
            <Container className={'py-5 flex items-center gap-[23vw]'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-xl font-bold'>Select your country</h1>
            </Container>
            <Container className={'w-[398px] h-[62px] rounded-xl py-2 px-5 outline-none bg-[#F8F8F8] mx-auto my-5 transition-all focus-within:bg-white focus-within:border focus-within:border-[#0AB247] flex items-center justify-between'}>
                <div className='flex items-center gap-3'>
                    <img src={assets.search} alt="" />
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Search for a country' className='bg-transparent w-full h-full outline-none placeholder:text-[#767578]' />
                </div>
                {country.length > 0 && <img src={assets.close} alt="" onClick={() => setCountry("")} />}
            </Container>

            {/* Countries */}
            <Container className={'my-4'}>
                <h1 className='text-lg text-[#1E1E1E]'>A</h1>
                <div className='mt-8'>
                    {Array(9).fill().map((_, index) => (
                        <>
                            <div key={index} className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img src={assets.country_flag} alt="" />
                                    <p className='text-lg text-[#333333]'>United Kingdom</p>
                                </div>
                                <p className='text-lg text-[#767578]'>+44</p>
                            </div>
                            <hr className='my-6' />
                        </>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default SelectPhoneCountry