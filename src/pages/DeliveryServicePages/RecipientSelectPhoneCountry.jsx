import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const RecipientSelectPhoneCountry = () => {
    const [country, setCountry] = useState("")
    const [countries, setCountries] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setCountries(data);
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
                console.error("Error fetching the countries:", error);
            }
        };

        fetchCountries();
    }, [])
    return (
        <>
            <div className='sticky top-0 z-30 bg-white pb-1'>
                <Container className={'py-5 flex items-center gap-[23vw] lg:gap-[36vw]'}>
                    <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Select your country</h1>
                </Container>
                <Container className={'w-[398px] lg:w-full h-[62px] rounded-xl py-2 px-5 outline-none bg-[#F8F8F8] mx-auto my-5 transition-all focus-within:bg-white focus-within:border focus-within:border-[#0AB247] flex items-center justify-between'}>
                    <div className='flex items-center gap-3 lg:w-full px-4'>
                        <img src={assets.search} alt="" />
                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Search for a country' className='bg-transparent w-full h-full outline-none placeholder:text-[#767578]' />
                    </div>
                    {country.length > 0 && <img src={assets.close} alt="" onClick={() => setCountry("")} />}
                </Container>
            </div>

            {/* Countries */}
            {loading && <div>Loading...</div>}
            {error && <div>Error Fetching Countries</div>}

            <Container className={'my-4'}>
                {/* <h1 className='text-lg text-[#1E1E1E]'>A</h1> */}
                {countries?.map((country, index) => (
                    <div className='mt-8'>
                        <>
                            <div key={index} className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img src={country?.flags.png} alt="" className='w-[50px] h-[38px] rounded object-contain' />
                                    <p className='text-lg text-[#333333]'>{country?.name.common}</p>
                                </div>
                                <p className='text-lg text-[#767578]'>{country?.idd.root}</p>
                            </div>
                            <hr className='my-6' />
                        </>
                    </div>
                ))}
            </Container>
        </>
    )
}

export default RecipientSelectPhoneCountry