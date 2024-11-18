import React from 'react'
import Container from '../components/Container'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const RiderInfo = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container className={'py-5 flex items-center gap-[22vw] bg-white'}>
                <img src={assets.arrow_left} alt="" className='invert' onClick={() => navigate(-1)} />
                <h1 className='text-[#2F2F3F] text-[23px] font-bold'>Rider Information</h1>
            </Container>

            <Container className={'mt-14 flex flex-col items-center justify-center'}>
                <img src={assets.jacob_jones} alt="" className='w-28 h-28' />
                <h2 className='text-[#2F2F3F] text-2xl font-medium mt-5'>Jacob Jones</h2>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-[#777777]'>+44 902 467 7047</p>
                    <img src={assets.copy_sm} alt="" />
                </div>
            </Container>

            <Container className={'mt-9'}>
                <Container className={'h-[162px] rounded-2xl shadow-md flex items-center justify-between px-9'}>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='border border-[#F7F7F7] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.star_hollow} alt="" />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-[#2F2F3F] font-medium text-lg text-center'>4.5</h3>
                            <p className='text-[#767578] text-sm text-center'>Ratings</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='border border-[#F7F7F7] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.shopping_basket} alt="" />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-[#2F2F3F] font-medium text-lg text-center'>210</h3>
                            <p className='text-[#767578] text-sm text-center'>Delivery</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col justify-center'>
                        <div className='border border-[#F7F7F7] p-3 rounded-full flex items-center justify-center w-max'>
                            <img src={assets.clock_01} alt="" />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-[#2F2F3F] font-medium text-lg text-center'>2</h3>
                            <p className='text-[#767578] text-sm text-center'>Years</p>
                        </div>
                    </div>
                </Container>
            </Container>

            <Container className={'mt-7'}>
                <Container className={'rounded-2xl shadow-md flex items-center flex-col pt-5'}>
                    <div className='flex items-center justify-between w-full mb-5'>
                        <h3 className='text-[#767578]'>Member since</h3>
                        <h3 className='text-[#2F2F3F] text-lg font-medium'>July 14, 2020</h3>
                    </div>
                    <div className='flex items-center justify-between w-full mb-5'>
                        <h3 className='text-[#767578]'>Motorcycle model</h3>
                        <h3 className='text-[#2F2F3F] text-lg font-medium'>Yamaha MX King</h3>
                    </div>
                    <div className='flex items-center justify-between w-full mb-5'>
                        <h3 className='text-[#767578]'>Plate number</h3>
                        <h3 className='text-[#2F2F3F] text-lg font-medium'>HSW 4736 XK</h3>
                    </div>
                </Container>
            </Container>

            <Container className={'py-5 w-full fixed left-0 bottom-0 bg-white flex items-center justify-between gap-5'}>
                <button className='w-1/2 rounded-full bg-[#EBF9EE] p-4 flex items-center gap-4 justify-center'>
                    <img src={assets.call_green} alt="" />
                    <p className='text-[#0AB247] text-lg font-bold'>Call</p>
                </button>
                <button className='w-1/2 rounded-full bg-[#0AB247] p-4 flex items-center gap-4 justify-center'>
                    <img src={assets.message_white} alt="" />
                    <p className='text-white text-lg font-bold'>Chat</p>
                </button>
            </Container>
        </div>
    )
}

export default RiderInfo