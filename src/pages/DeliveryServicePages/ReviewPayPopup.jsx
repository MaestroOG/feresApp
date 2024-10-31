import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import { FeresContext } from '../../context/FeresContext'

const ReviewPayPopup = () => {
    const [number, setNumber] = useState("")
    return (
        <div className='bg-[#06060626] h-screen fixed top-0 left-0 w-full z-50'>
            <div className='fixed bottom-0 left-0 w-full bg-white rounded-t-xl h-[584px]'>
                <div className='flex items-center gap-[25vw] mt-5'>
                    <img src={assets.cancel_icon} alt="" className='pl-[10px]' />
                    <h1 className='text-[#2F2F3F] text-xl font-bold'>Review and pay</h1>
                </div>
                <Container className={'mt-6'}>
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

                <Container>
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8]'>
                        <p className='text-[#767578]'>Select ebirr account</p>
                        <img src={assets.arrow_down} alt="" />
                    </Container>
                </Container>

                <Container>
                    <Container className='mt-6 flex items-center justify-between p-5 bg-[#F8F8F8] focus-within:bg-white focus-within:border focus-within:border-[#0AB247] transition-all rounded-xl'>
                        <input type="password" placeholder='Enter you pin' className='bg-transparent outline-none w-full' />
                    </Container>
                </Container>


                <Container>
                    <Container className='mt-6 border border-[#EEEEEE] rounded-xl p-5 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src={assets.jacob_jones} alt="" />
                            <div>
                                <h3 className='text-[#2F2F3F] font-medium mb-2'>Jacob Jones</h3>
                                <p className='text-[#767578] text-sm'>22 Feb, 2024 15:50 PM</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#767578] text-sm mb-2'>Amount</p>
                            <h3 className='text-[#2F2F3F] font-medium'>ETB 40</h3>
                        </div>
                    </Container>
                </Container>

                <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                    <button className='w-1/2 rounded-full bg-[#EBF9EE] p-4 flex items-center gap-4 justify-center'>
                        <p className='text-[#0AB247] text-lg font-bold'>Not now</p>
                    </button>
                    <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center'>
                        <p className='text-white text-lg font-bold'>Pay now</p>
                    </button>
                </Container>
            </div>
        </div>
    )
}

export default ReviewPayPopup